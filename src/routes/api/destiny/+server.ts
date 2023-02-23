import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { BUNGIE_USER_ID, BUNGIE_USER_PLATFORM, BUNGIE_API_KEY } from '$env/static/private';

export const GET = (async () => {
	const manifest = await (await fetch('https://www.bungie.net/Platform/Destiny2/Manifest/')).json();

	const contentManifest = await (
		await fetch('https://bungie.net' + manifest.Response.jsonWorldContentPaths.en)
	).json();

	return json(contentManifest.DestinyActivityDefinition);
}) satisfies RequestHandler;
