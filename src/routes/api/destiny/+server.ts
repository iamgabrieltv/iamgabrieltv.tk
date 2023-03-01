import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { BUNGIE_USER_ID, BUNGIE_USER_PLATFORM, BUNGIE_API_KEY } from '$env/static/private';

let keyHeader = new Headers({ 'X-API-Key': BUNGIE_API_KEY });

export const GET = (async () => {
	const manifest = await (await fetch('https://www.bungie.net/Platform/Destiny2/Manifest/')).json();

	const contentManifest = await (
		await fetch('https://bungie.net' + manifest.Response.jsonWorldContentPaths.en)
	).json();

	const profile = await (
		await fetch(
			'https://bungie.net/Platform/Destiny2/' +
				BUNGIE_USER_PLATFORM +
				'/Profile/' +
				BUNGIE_USER_ID +
				'?components=100,200,204',
			{ headers: keyHeader }
		)
	).json();

	function activityName() {
		const characterActivities = profile.Response.characterActivities.data;
		const keys = Object.keys(characterActivities);
		const firstGuardian = characterActivities[keys[0]];
		const currentActivityHash = firstGuardian.currentActivityHash;

		switch (currentActivityHash) {
			case 0:
				return 'Offline';
				break;
			case 82913930:
				return 'In Orbit';
				break;
			default:
				const definitions = Object.keys(contentManifest.DestinyActivityDefinition);
				const matchingObject = definitions.find((obj) => obj === currentActivityHash);
				return definitions;
		}
	}

	return json(activityName());
}) satisfies RequestHandler;
