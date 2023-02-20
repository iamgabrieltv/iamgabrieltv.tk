<script lang="ts">
	import DiscordRpc from '$lib/components/discord-rpc.svelte';

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

<div class="divider" />

<div class="flex flex-row place-content-center">
	<DiscordRpc {data} />
</div>
