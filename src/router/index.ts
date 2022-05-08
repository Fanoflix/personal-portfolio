import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import HomeViewContact from "../views/Home/HomeViewContact.vue";
import HomeViewAbout from "../views/Home/HomeViewAbout.vue";
import NotFound from "../views/NotFound.vue";
import Survey from "../views/Survey.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
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
        {
          path: "",
          component: HomeViewAbout,
        },
      ],
    },
    {
      path: "/survey",
      name: "survey",
      component: Survey,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
