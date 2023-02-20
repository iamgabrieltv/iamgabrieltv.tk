<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	export let data;
	let { response } = data;
	$: ({ response } = data);

	const user = response.discord_user;
	const status = response.discord_status;
	const spotify = response.spotify;
	const activities = response.activities;
	let progress = 0;
	let totalDuration = 0;
	let spotifyUpdateInterval;
	let activitiesUpdateInterval;

	onMount(() => {
		if (activities[0] && browser) {
			activitiesUpdateInterval = setInterval(function () {
				location.reload();
			}, 60000);
		}

		if (spotify && browser) {
			totalDuration = Math.floor((spotify.timestamps.end - spotify.timestamps.start) / 1000);
			progress = Math.floor((Date.now() - spotify.timestamps.start) / 1000);
			function updateProgress() {
				progress = Math.floor((Date.now() - spotify.timestamps.start) / 1000);
			}

			spotifyUpdateInterval = setInterval(function () {
				updateProgress();
				if (progress >= totalDuration) {
					clearInterval(spotifyUpdateInterval);
					location.reload();
				}
			}, 1000);
		}
	});

	onDestroy(() => {
		clearInterval(spotifyUpdateInterval);
		clearInterval(activitiesUpdateInterval);
	});
</script>

<h1 class="text-3xl font-semibold">Hello Hooman!</h1>
<p class="text-lg">
	I see you found my website. You can check out my <a class="btn-link" href="/about">About me</a>
	page or my <a class="btn-link" href="/projects">projects</a>.
</p>
<p class="text-lg">
	You can also leave a message in the <a class="btn-link" href="/guestbook">Guestbook</a>!
</p>

<div class="divider" />

<div class="flex flex-row place-content-center">
	<a
		href="https://discord.com/users/468100897860485120"
		class="m-1 hover:scale-[1.025] transition-all duration-75 cursor-pointer shadow-xl h-auto w-auto rounded-lg bg-base-300 p-4"
	>
		<div class="avatar">
			{#if status === 'online'}
				<div
					class="w-10 rounded-full ring ring-[#23a55a] ring-offset-base-100 ring-offset-2 h-auto mx-1"
				>
					<img alt="avatar" src="https://cdn.discordapp.com/avatars/{user.id}/{user.avatar}.png" />
				</div>
			{:else if status === 'dnd'}
				<div
					class="w-10 rounded-full ring ring-[#f23f43] ring-offset-base-100 ring-offset-2 h-auto mx-1"
				>
					<img alt="avatar" src="https://cdn.discordapp.com/avatars/{user.id}/{user.avatar}.png" />
				</div>
			{:else if status === 'idle'}
				<div
					class="w-10 rounded-full ring ring-[#f0b232] ring-offset-base-100 ring-offset-2 h-auto mx-1"
				>
					<img alt="avatar" src="https://cdn.discordapp.com/avatars/{user.id}/{user.avatar}.png" />
				</div>
			{:else}
				<div
					class="w-10 rounded-full ring ring-[#82858f] ring-offset-base-100 ring-offset-2 h-auto mx-1"
				>
					<img alt="avatar" src="https://cdn.discordapp.com/avatars/{user.id}/{user.avatar}.png" />
				</div>
			{/if}
			<p class="place-self-start font-semibold ml-1 my-2">{user.username}</p>
			<p class="my-2">#{user.discriminator}</p>
		</div>

		<div class="divider m-0" />

		{#if response.listening_to_spotify}
			{#if activities[1]}
				{#if activities[1].name !== 'Spotify'}
					<div class="flex flex-row gap-2">
						{#if activities[1].assets}
							{#if activities[1].assets.large_image.startsWith('mp:external/')}
								<img
									class="rounded-lg w-20"
									src="https://media.discordapp.net/external/{activities[1].assets.large_image.replace(
										'mp:external/',
										''
									)}"
								/>
							{:else}
								<img
									class="rounded-lg w-20"
									src="https://cdn.discordapp.com/app-assets/{activities[1]
										.application_id}/{activities[1].assets.large_image}.webp"
								/>
							{/if}
						{:else}
							<img class="rounded-lg w-20" src="/unknown_rpc.png" />
						{/if}
						<div class="flex flex-col">
							<p class="font-semibold">{activities[1].name}</p>
							{#if activities[1].details}
								<p>{activities[1].details}</p>
							{/if}
							{#if activities[1].state}<p>{activities[1].state}</p>{/if}
						</div>
					</div>
				{:else if activities[0]}
					{#if activities[0].name !== 'Spotify'}
						<div class="flex flex-row gap-2">
							{#if activities[0].assets}
								{#if activities[0].assets.large_image.startsWith('mp:external/')}
									<img
										class="rounded-lg w-20"
										src="https://media.discordapp.net/external/{activities[0].assets.large_image.replace(
											'mp:external/',
											''
										)}"
									/>
								{:else}
									<img
										class="rounded-lg w-20"
										src="https://cdn.discordapp.com/app-assets/{activities[0]
											.application_id}/{activities[0].assets.large_image}.webp"
									/>
								{/if}
							{:else}
								<img class="rounded-lg w-20" src="/unknown_rpc.png" />
							{/if}
							<div class="flex flex-col">
								<p class="font-semibold">{activities[0].name}</p>
								{#if activities[0].details}
									<p>{activities[0].details}</p>
								{/if}
								{#if activities[0].state}<p>{activities[0].state}</p>{/if}
							</div>
						</div>
					{/if}
				{/if}
			{:else}
				<p class="font-bold text-green-400">LISTENING TO SPOTIFY</p>
				<div class="flex flex-row gap-2">
					<img class="rounded-lg w-20" src={spotify.album_art_url} />
					<div class="flex flex-col">
						<p class="font-semibold">{spotify.song}</p>
						<p>{spotify.artist}</p>
						<progress
							class="progress progress-success w-full"
							value={progress}
							max={totalDuration}
						/>
					</div>
				</div>
			{/if}
		{:else if activities[0]}
			<div class="flex flex-row gap-2">
				{#if activities[0].assets}
					{#if activities[0].assets.large_image.startsWith('mp:external/')}
						<img
							class="rounded-lg w-20"
							src="https://media.discordapp.net/external/{activities[0].assets.large_image.replace(
								'mp:external/',
								''
							)}"
						/>
					{:else}
						<img
							class="rounded-lg w-20"
							src="https://cdn.discordapp.com/app-assets/{activities[0]
								.application_id}/{activities[0].assets.large_image}.webp"
						/>
					{/if}
				{:else}
					<img class="rounded-lg w-20" src="/unknown_rpc.png" />
				{/if}
				<div class="flex flex-col">
					<p class="font-semibold">{activities[0].name}</p>
					{#if activities[0].details}
						<p>{activities[0].details}</p>
					{/if}
					{#if activities[0].state}<p>{activities[0].state}</p>{/if}
				</div>
			</div>
		{:else}
			<div class="grid place-content-center">
				<p class="italic">Nothing to do</p>
			</div>
		{/if}
	</a>
</div>
