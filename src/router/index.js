import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('../views/login.vue'),
  },
  {
    path: '/my',
    name: 'my',
    meta: {
      title: '我的',
    },
    component: () => import('../views/my.vue'),
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: () => import('../views/home.vue'),
  },
  {
    path: '/dialogue',
    name: 'dialogue',
    meta: {
      title: '对话',
    },
    component: () => import('../views/dialogue.vue'),
  },
  {
    path: '/answer',
    name: 'answer',
    meta: {
      title: '问答',
    },
    component: () => import('../views/dialogue.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
