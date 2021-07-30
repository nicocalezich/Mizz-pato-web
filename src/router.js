import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Dates from './components/Dates'
import Photos from './components/Photos'
import Videos from './components/Videos'
import Contact from './components/Contact'
import Success from './components/Success'


Vue.use(VueRouter)
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: "/", redirect: "/home"},
        {path: "/home", component: Home},
        {path: "/dates", component: Dates},
        {path: "/photos", component: Photos},
        {path: "/videos", component: Videos},
        {path: "/contact", component: Contact},
        {path: "/success", component: Success},
    ]
})