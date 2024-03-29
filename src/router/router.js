import App from "@/App.vue"
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    component: App
  }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;