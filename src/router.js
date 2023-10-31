import { createRouter, createWebHistory } from 'vue-router';
import ContentAppVue from './components/ContentApp.vue';

const routes = [
  { path: '/', component: ContentAppVue },
  { path: '/DEX', component: ContentAppVue },
  { path: '/TXexplorer', component: ContentAppVue },
  { path: '/Certificates', component: ContentAppVue },
  { path: '/Tokens', component: ContentAppVue },
  { path: '/VPNclient', component: ContentAppVue },
  { path: '/VPNservice', component: ContentAppVue },
  { path: '/Console', component: ContentAppVue },
  { path: '/Logs', component: ContentAppVue },
  { path: '/Settings', component: ContentAppVue },
  { path: '/dApps', component: ContentAppVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
