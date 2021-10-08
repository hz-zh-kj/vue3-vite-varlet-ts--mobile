import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { Product } from '/@/api/model/types';
import { useRequest } from 'vue-request'
import { CustomResponse } from '../utils/axios/types'

export interface State {
    shoppingCart: Product[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        shoppingCart: [] // 购物车列表
    },
    getters: {
        isInCart(state) {
            return (data: any) => {
                return state.shoppingCart.findIndex(item => item.id === data.id) > -1 ? true : false;
            }
        }
    },
    mutations: {
        ADD_TO_CART(state, data) {
            state.shoppingCart.push(data)
        },
        CHANGE_COUNT(state, { type, data }) {
            return state.shoppingCart.map(item => {
                if (data.id === item.id) {
                    item.count += type === 'add' ? 1 : -1;
                }
                return item;
            })
        },
        GET_CART_LIST(state) {
            useRequest("/api/shopping-cart/list",
                {
                    formatResult: (response: CustomResponse) => {
                        // response.data as Product[]
                        const data : Product = <Product> response.data
                        response.data = data
                        return response
                    },
                    onSuccess: (res) => {
                        console.log(res.data)
                        state.shoppingCart = res.data
                    }
                }); 
        },
        REMOVE_BY_ID(state, id) {
            state.shoppingCart = state.shoppingCart.filter(item => item.id !== id);
        }
    }
})

export function useStore() {
    // 通过key给store提供类型
    return baseUseStore(key)
}
