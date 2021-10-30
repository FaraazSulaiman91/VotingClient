import SessionRouter from '@/pages/session/SessionRouter';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		SessionRouter
	],
});

export default router;