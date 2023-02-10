<script lang="ts">
	import { page } from '$app/stores';
	import LoginButton from '$lib/loginButton.svelte';
	import { supabase } from '$lib/supabase';
	import { v4 as uuidv4 } from 'uuid';

	let newMessage: string;

	export let data;
	let { messages } = data;
	$: ({ messages } = data);

	async function sendMessage() {
		if (newMessage) {
			document.getElementById('input').value = '';
			const record = { username: $page.data.session?.user?.name, message: newMessage };
			messages = [...messages, record];

			const { error } = await supabase
				.from('guestbook')
				.insert({
					username: $page.data.session?.user?.name,
					message: newMessage,
					email: $page.data.session?.user?.email,
					id: uuidv4()
				});
		}
	}
</script>

<h1 class="text-3xl font-bold">Guestbook</h1>
<p class="text-xl mb-2">Write something nice!</p>

{#if $page.data.session}
	<small
		>You are logged in as {$page.data.session.user?.name} ({$page.data.session.user?.email})</small
	>

	<form on:submit|preventDefault={sendMessage}>
		<input
			type="text"
			placeholder="Message"
			id="input"
			class="input w-full max-w-xs bg-base-200"
			bind:value={newMessage}
		/>
		<button type="submit" class="btn btn-ghost bg-base-300">Sign</button>
	</form>
{:else}
	<LoginButton />
{/if}

<ul class="flex flex-col-reverse">
	{#each messages as message}
		<li><strong>{message.username}: </strong>{message.message}</li>
	{/each}
</ul>
