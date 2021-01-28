import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import NovaConta from '@/components/novaconta.vue'
Vue.use(Router)


const routes = [
    {
        path: '/',
        name:'Home',
        component: Home
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/novaConta',
        name: 'novaConta',
        component: NovaConta
    }
]

const router = new Router({ routes })

export default router