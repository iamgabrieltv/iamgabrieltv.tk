<script>
	import { page } from '$app/stores';
	import LoginButton from '$lib/loginButton.svelte';
</script>

<h1 class="text-3xl font-bold">Guestbook</h1>
<p class="text-xl mb-2">Write something nice!</p>

{#if $page.data.session}
	<p class="text-lg">You are logged in as {$page.data.session.user?.name}</p>
{:else}
	<LoginButton />
{/if}
