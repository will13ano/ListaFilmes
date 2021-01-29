import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import NovaConta from '@/components/novaconta.vue'
import ListaFilmes from '@/components/lista.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name:'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/novaConta',
        name: 'novaConta',
        component: NovaConta
    },
    {
        path: '/mylist',
        name: 'minhaLista',
        component: ListaFilmes
    }
]

const router = new Router({ routes })

export default router