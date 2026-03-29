///// VUE ROUTER
import {createRouter , createWebHistory}  from "vue-router"
import type { RouteRecordRaw } from "vue-router"
/// Pages
import { HomePage, UsersPage } from "@/Pages"

const routes : RouteRecordRaw[] = [
    {
        path : "/", 
        component : HomePage
    } , 
    {
        path : "/users", 
        component : UsersPage
    }
]

const router = createRouter({
    history: createWebHistory() , 
    routes
})

export default router
