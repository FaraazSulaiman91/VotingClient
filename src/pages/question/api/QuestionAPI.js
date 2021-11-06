import axios from 'axios';

export async function QUESTION_CREATE(title, sessionCode)
{
	let result;
	try
	{
		result = await axios.post('http://localhost:8080/v1/questions', {
			title: title
		}, {
			headers: {
				sessionCode: sessionCode
			}
		})
	}
	catch (err)
	{
		console.error(err);
	}

	return result;
}

export async function QUESTION_GET_ALL(code)
{
	let result;
	try
	{
		result = await axios.get('http://localhost:8080/v1/questions',
				{
					headers: {
						sessionCode: code
					}
				});
	}
	catch (err)
	{
		console.error(err);
	}

	return result;
}