import SessionState from '@/pages/session/SessionState';
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		session: SessionState
	}
})
export default store;
