import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

//引入组件
const Main = ()=>import('./../components/main/main')
const Log = ()=>import('./../components/log/Log')

export default new Router({
    routes:[
        {path:'/',name:'main',component:Main},
        {path:'/login',name:'login',component:Log}
    ]
})


