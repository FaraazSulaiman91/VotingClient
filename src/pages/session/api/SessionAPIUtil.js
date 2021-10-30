import axios from 'axios';

let DEFAULT_SESSION = {
	'question': 'What is the better language?',
	'options': [
		{
			'id': 1,
			'name': 'Java',
			'voteCount': 1
		},
		{
			'id': 2,
			'name': 'Kotlin',
			'voteCount': 1
		},
		{
			'id': 3,
			'name': 'SQL',
			'voteCount': 1
		}
	]

}
let SESSION = {
	JOIN: function (capturedSessionId)
	{
		let rsp = {};
		axios.get('SESSION_URL_/JOIN_SESSION', {
			params: {
				sessionId: capturedSessionId
			}
		}).then(response => (rsp = response));

		if (rsp.success)
			this.$store.commit('setChildSessionId', rsp.sessionId);

		return rsp;
	},
	CREATE: function ()
	{
		let rsp = {};
		axios.post('SESSION_URL_/CREATE_SESSION').then(response => (rsp = response));
		this.$store.commit('setMasterSessionId', rsp.sessionId);
		return rsp;
	}
}

export default SESSION;