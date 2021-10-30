export default {
	state: () => ({
		sessionId: 0,
		connTypeId: 0
	}),
	mutations: {
		setMasterSessionId(state, sessionId)
		{
			state.sessionId = sessionId;
			state.connTypeId = 1;
		},
		setChildSessionId(state, sessionId)
		{
			state.sessionId = sessionId;
			state.connTypeId = 2;
		}
	},

	getters: {
		getSessionId(state)
		{
			return state.sessionId
		},
		isMasterConnTypeId(state)
		{
			return state.connTypeId == 1;
		},
		isChildConnTypeId(state)
		{
			return state.connTypeId == 2;
		}
	}
}

