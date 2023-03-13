<script lang="ts">
	import DiscordRpc from '$lib/components/discord-rpc.svelte';

	import Icon from '@iconify/svelte';

	export let data;
</script>

<h1 class="text-3xl font-semibold">Hello Hooman!</h1>
<p class="text-lg">
	I see you found my website. You can check out my <a class="btn-link" href="/about">About me</a>
	page or my <a class="btn-link" href="/projects">projects</a>.
</p>
<p class="text-lg">
	You can also leave a message in the <a class="btn-link" href="/guestbook">Guestbook</a>!
</p>

<div class="flex flex-row mt-2">
	<a href="https://github.com/iamgabrieltv">
		<Icon class="hover:text-black" width="2em" height="2em" icon="mdi:github" />
	</a>

	<a href="https://twitch.tv/iamgabrieltv">
		<Icon class="hover:text-[#9147ff]" width="2em" height="2em" icon="mdi:twitch" />
	</a>

	<a href="https://youtube.com/@iamgabrieltv">
		<Icon class="hover:text-[#fe0000]" width="2em" height="2em" icon="mdi:youtube" />
	</a>

	<a href="https://linktr.ee/iamgabrieltv">
		<Icon class="hover:text-[#43e660]" width="2em" height="2em" icon="simple-icons:linktree" />
	</a>
</div>

<div class="divider" />

<div class="flex flex-row place-content-center">
	<DiscordRpc {data} />
</div>
