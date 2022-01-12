import { createWebHistory, createRouter } from 'vue-router';
import { routes } from '@/router/routes';

const history = createWebHistory();
const router = createRouter({
    history,
    routes: routes
});

export default router;