export default {
	namespaced: true,
	state: () => ({
		sessionCode: 0,
		connTypeId: 0
	}),
	mutations: {
		setMasterSessionCode(state, sessionCode)
		{
			state.sessionCode = sessionCode;
			state.connTypeId = 1;
		},
		setChildSessionCode(state, sessionCode)
		{
			state.sessionCode = sessionCode;
			state.connTypeId = 2;
		},
		resetSessionCode(state)
		{
			state.sessionCode = 0;
			state.connTypeId = 0;
		}
	},

	getters: {
		getSessionCode(state)
		{
			return state.sessionCode
		},
		isMasterConnTypeId(state)
		{
			return state.connTypeId === 1;
		},
		isChildConnTypeId(state)
		{
			return state.connTypeId === 2;
		},
		displayConnType(state, getters)
		{
			if (getters.isMasterConnTypeId) return 'Master';
			else if (getters.isChildConnTypeId) return 'Child';
			else return 'Unknown';
		}
	}
}

