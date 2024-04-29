import { createRouter, createWebHistory } from "vue-router";
import MovieList from "@/views/MovieList.vue";
import MovieDetails from "@/views/MovieDetails.vue";
import CreateMovie from "@/views/CreateMovie.vue";
import UpdateMovie from "@/views/UpdateMovie.vue";
import Register from "@/views/RegisterUser.vue";
import Login from "@/views/LoginUser.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "MovieList",
    component: MovieList,
  },
  {
    path: "/movies/:id",
    name: "MovieDetails",
    component: MovieDetails,
    props: true,
  },
  {
    path: "/create",
    name: "CreateMovie",
    component: CreateMovie,
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoogedIn) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/update/:id",
    name: "UpdateMovie",
    component: UpdateMovie,
    props: true,
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoogedIn) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
