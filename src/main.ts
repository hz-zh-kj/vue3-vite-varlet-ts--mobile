/*
 *           佛曰:  
 *                   写字楼里写字间，写字间里程序员；  
 *                   程序人员写程序，又拿程序换酒钱。  
 *                   酒醒只在网上坐，酒醉还来网下眠；  
 *                   酒醉酒醒日复日，网上网下年复年。  
 *                   但愿老死电脑间，不愿鞠躬老板前；  
 *                   奔驰宝马贵者趣，公交自行程序员。  
 *                   别人笑我忒疯癫，我笑自己命太贱；  
 *                   不见满街漂亮妹，哪个归得程序员？
 * 
 * @Author: 酋小怪
 * @Date: 2021-06-24 14:37:06
 * @LastEditors: 酋小怪
 * @LastEditTime: 2021-06-24 16:28:29
 * @Description: file content
 * @FilePath: \src\main.ts
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { setVant } from './config/setVant' // vant导入
import { store, key } from './store/index'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'


import './mock' // mockjs

const app = createApp(App) // 创建实例

app.use(router)
app.use(store, key)

// setVant(app)

app.mount('#app')
