import axios from 'axios';

export async function SESSION_CREATE()
{
	let result;
	try
	{
		result = await axios.post('http://localhost:8080/v1/sessions');
	}
	catch (err)
	{
		console.error(err);
	}

	return result;
}

export async function SESSION_JOIN(capturedSessionCode)
{
	let result;
	try
	{
		result = await axios.get('http://localhost:8080/v1/sessions/' + capturedSessionCode);
	}
	catch (err)
	{
		console.error(err);
	}

	return result;
}