import SessionRouter from '@/pages/session/SessionRouter';
import Vue from 'vue';
import Router from 'vue-router';
import QuestionRouter from '@/pages/question/QuestionRouter';
import QuestionAddRouter from '@/pages/question/QuestionAddRouter';
import store from '@/core/store';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		SessionRouter, QuestionRouter, QuestionAddRouter
	],
});

router.beforeEach((to, from, next) =>
{
	console.log('to:' + to.fullPath);
	console.log('from:' + from.fullPath);

	let sessionCode = store.getters['session/getSessionCode'];

	if (!sessionCode || sessionCode === 0)
	{
		sessionCode = to.fullPath.substr(1, to.fullPath.length);
		if (sessionCode.indexOf('/') === -1)
		{
			store.commit('session/setChildSessionCode', sessionCode)
			next();
		}
		else
			next({ name: 'Session' });
	}
	else
		next();
})

export default router;