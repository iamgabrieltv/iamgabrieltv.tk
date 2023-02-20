export async function load() {
	const response = await fetch('https://api.lanyard.rest/v1/users/468100897860485120', {
		method: 'GET'
	});

	const { data: responseData }: { data: Query } = await response.json();

	return { lanyardResponse: responseData ?? [] };
}
