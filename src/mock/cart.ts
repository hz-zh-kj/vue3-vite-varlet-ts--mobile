import { CustomResponse } from '../utils/axios/types'
import {Product} from '/@/api/model/types'

export const cartMock = (Mock: any) => {
    Mock.mock("/api/shopping-cart/list", 'get', {
        data: [{ id: 1, title: "a", price: 100, count: 1, },
        { id: 2, title: "b", price: 1000, count: 2, },] as Product[],
        success: true,
        code: '000000',
        dataType: 'mock',
    } as CustomResponse)
}