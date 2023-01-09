import { createRouter, createWebHistory } from "vue-router";

import notFound from "@/views/NotFound.vue";
// see    https://stackoverflow.com/questions/46590760/vue-js-2-multiple-routing-files

import routesFraMultiply1 from "./routesFraMultiply1.js";
import routesFraMultiply2 from "./routesFraMultiply2.js";
import routesFraMultiply3 from "./routesFraMultiply3.js";
import routesFraTc from "./routesFraTc.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routesFraMultiply1,
    ...routesFraMultiply2,
    ...routesFraMultiply3,
     ...routesFraTc,

     {
      path: "/",
        name: "Fra-index",
        component: function () {
          return import(
            /* webpackChunkName: "prototype" */ "../views/M2/fra/index.vue"
          );
        }
      },

    {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: notFound,
    }


  ],
});

export default router;
