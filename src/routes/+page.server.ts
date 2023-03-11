import { DISCORD_USER_ID, URL } from '$env/static/private';

export async function load() {
	const response = await fetch('https://api.lanyard.rest/v1/users/' + DISCORD_USER_ID, {
		method: 'GET'
	});

	const { data: responseData }: { data: Query } = await response.json();

	const apiResponse = await (await fetch(URL + 'api/destiny')).json();

	return { lanyardResponse: responseData ?? [], apiResponse };
}
