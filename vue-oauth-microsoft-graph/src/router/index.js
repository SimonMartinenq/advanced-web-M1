import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue'
import ConversationsPage from '@/pages/ConversationsPage.vue'

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "Convesation",
    path: "/conversations",
    component: ConversationsPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;