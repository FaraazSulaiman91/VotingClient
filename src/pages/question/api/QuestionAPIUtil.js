import axios from 'axios';

let QUESTION_API = {
	CREATE: function (questionName, options)
	{
		let rsp = {};
		axios.post('SESSION_URL_/CREATE_QUESTION', {
			params: {
				sessionId: this.$store.getters.session.getSessionId,
				questionName: questionName,
				options: options
			}
		}).then(response => (rsp = response));

		return rsp;
	}
}

export default QUESTION_API;