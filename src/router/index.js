import { createRouter, createWebHistory } from 'vue-router';

// 定义路由配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/PortfolioFile.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/Portfolio/PortfolioTemplateA.vue')
  },
  {
    path: '//portfolio/:id',
    name: 'Portfolio',
    component: () => import('../components/Portfolio/PortfolioTemplateA.vue')
  },
  {
    path: '/PortfolioTemplateA',
    name: 'PortfolioTemplateA',
    component: () => import('../components/Portfolio/PortfolioTemplateA.vue')
  },
  {
    path: '/PortfolioTemplateB',
    name: 'PortfolioTemplateB',
    component: () => import('../components/Portfolio/PortfolioTemplateB.vue')
  },
  {
    path: '/PortfolioTemplateC',
    name: 'PortfolioTemplateC',
    component: () => import('../components/Portfolio/PortfolioTemplateC.vue')
  },
];

// 创建 router 实例
const router = createRouter({
  history: createWebHistory(),
  routes // 简写，等同于 routes: routes
});

export default router;
