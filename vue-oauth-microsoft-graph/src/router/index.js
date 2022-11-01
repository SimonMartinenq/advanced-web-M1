import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue'
import ConversationsPage from '@/pages/ConversationsPage.vue'
import ConversationShowPage from '@/pages/ConversationShowPage.vue'
import store from "@/store";
const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "Convesations",
    path: "/conversations",
    component: ConversationsPage,
    meta: {
        requiresAuth: true,
      },
  },
  {
    name: "Convesation",
    path: "/conversation/:id",
    component: ConversationShowPage,
    meta: {
        requiresAuth: true,
      },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
    if (
      to.matched.some((record) => record.meta.requiresAuth) &&
      !store.state.user
    )
      next({ name: "Home" });
    else next();
  });

export default router;