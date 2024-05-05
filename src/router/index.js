import { createRouter, createWebHistory } from 'vue-router';

// 定义路由配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Portfolio.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/Portfolio/PortfolioTemplate1.vue')
  }
];

// 创建 router 实例
const router = createRouter({
  history: createWebHistory(),
  routes // 简写，等同于 routes: routes
});

export default router;
