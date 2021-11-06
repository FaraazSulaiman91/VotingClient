import SessionRouter from '@/pages/session/SessionRouter';
import Vue from 'vue';
import Router from 'vue-router';
import QuestionRouter from '@/pages/question/QuestionRouter';
import QuestionAddRouter from '@/pages/question/QuestionAddRouter';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		SessionRouter, QuestionRouter, QuestionAddRouter
	],
});

export default router;