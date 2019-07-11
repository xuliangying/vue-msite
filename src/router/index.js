import Vue from 'vue'
import vueRouter from 'vue-router'

import Index from '../pages/Index'

import Home from '../pages/home/Home'
import City from '../pages/city/City'
import Discovery from '../pages/discovery/Discovery'
import Order from '../pages/order/Order'
import Profile from '../pages/profile/Profile'
import VueRouter from 'vue-router';

Vue.use(vueRouter)

const routes = [
    {
        path : '/',
        redirect : '/home',
        component : Index,
        children : [
            {
                path : '/home',
                name : 'home',
                component : Home
            },
            {
                path : '/discovery',
                name : 'discovery',
                component : Discovery
            },
            {
                path : '/order',
                name : 'order',
                component : Order
            },
            {
                path : '/profile',
                name : 'profile',
                component : Profile
            }
        ]
    },
    {
        path : '/city',
        name : 'city',
        component : City
    },
]

export default new VueRouter({
    routes
})

