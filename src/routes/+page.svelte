<script lang="ts">
	export let data;
	let { response } = data;
	$: ({ response } = data);

	const user = response.discord_user;
	const status = response.discord_status;
	const spotify = response.spotify;
	const activities = response.activities;
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

<div class="grid place-content-center">
	<a
		href="https://discord.com/users/468100897860485120"
		class="hover:scale-[1.025] transition-all duration-75 cursor-pointer shadow-xl h-auto w-auto md:w-96 lg:w-96 rounded-lg bg-base-300 p-4"
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
				<div class="grid grid-cols-2 grid-flow-col">
					<img
						class="rounded-lg w-20"
						src="https://{activities[1].assets.large_image.substring(62)}"
					/>
					<div class="grid grid-rows-2 grid-flow-row col-start-2 h-10">
						<p class="font-semibold">{activities[1].name}</p>
						<p>{activities[1].details}</p>
					</div>
				</div>
			{:else if activities[0]}
				{#if activities[0].name !== 'Spotify'}
				<div class="grid grid-cols-2 grid-flow-col">
					<img
						class="rounded-lg w-20"
						src="https://{activities[0].assets.large_image.substring(62)}"
					/>
					<div class="grid grid-rows-2 grid-flow-row col-start-2 h-10">
						<p class="font-semibold">{activities[0].name}</p>
						<p>{activities[0].details}</p>
					</div>
				</div>
				{/if}
				{/if}
			{:else}
				<p class="font-bold text-green-400">LISTENING TO SPOTIFY</p>
				<div class="grid grid-cols-2 grid-flow-col">
					<img class="rounded-lg w-20" src={spotify.album_art_url} />
					<div class="grid grid-rows-2 grid-flow-row col-start-2 h-10">
						<p class="font-semibold">{spotify.song}</p>
						<p>{spotify.artist}</p>
					</div>
				</div>
			{/if}
		{:else if activities}
			<div class="grid grid-cols-2 grid-flow-col">
				<img
					class="rounded-lg w-20"
					src="https://{activities[0].assets.large_image.substring(62)}"
				/>
				<div class="grid grid-rows-2 grid-flow-row col-start-2 h-10">
					<p class="font-semibold">{activities[0].name}</p>
					<p>{activities[0].details}</p>
				</div>
			</div>
		{/if}
	</a>
</div>
