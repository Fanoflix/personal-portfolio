import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";
import HomeViewContact from "@/views/Home/HomeViewContact.vue";
import HomeViewAbout from "@/views/Home/HomeViewAbout.vue";
import NotFound from "@/views/NotFound.vue";
import SurveyView from "@/views/SurveyView.vue";
import ProjectsView from "@/views/ProjectsView.vue";

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
      path: "/surveys",
      name: "surveys",
      component: SurveyView,
      // component: () => import("@/views/Survey.vue"), // ! No need to lazy load the whole view, as the component's data is lazy loaded already
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
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
