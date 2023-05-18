import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/Home/HomeView.vue"
import HomeViewContact from "@/views/Home/HomeViewContact.vue"
import HomeViewAbout from "@/views/Home/HomeViewAbout.vue"
import NotFound from "@/views/NotFound.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/about",
      component: HomeView,
      children: [
        {
          path: "about",
          name: "about",
          component: HomeViewAbout,
        },
        {
          path: "contact",
          name: "contact",
          component: HomeViewContact,
        },
      ],
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
})

export default router
