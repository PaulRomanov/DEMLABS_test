import { createRouter, createWebHistory } from 'vue-router';
import StartComponent from './components/StartComponent.vue';
import ContentAppVue from './components/ContentApp.vue';
import ErrorPage from './components/ErrorPage.vue';

const routes = [
  { path: '/', component: StartComponent },
  { path: '/Wallet', component: ErrorPage },
  { path: '/DEX', component: ErrorPage },
  { path: '/TXexplorer', component: ErrorPage },
  { path: '/Certificates', component: ContentAppVue },
  { path: '/Tokens', component: ErrorPage },
  { path: '/VPNclient', component: ErrorPage },
  { path: '/VPNservice', component: ErrorPage },
  { path: '/Console', component: ErrorPage },
  { path: '/Logs', component: ErrorPage },
  { path: '/Settings', component: ErrorPage },
  { path: '/dApps', component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
