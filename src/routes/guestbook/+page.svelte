<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { supabase } from '$lib/supabase';

	let newMessage: string;

	export let data;
	let { messages } = data;
	$: ({ messages } = data);

	async function sendMessage() {
		if (newMessage) {
			document.getElementById('input').value = '';
			const record = { username: $page.data.session?.user?.name, message: newMessage };
			messages = [...messages, record];

			const { error } = await supabase.from('guestbook').insert({
				username: $page.data.session?.user?.name,
				message: newMessage,
				email: $page.data.session?.user?.email
			});
		}
	}
</script>

<h1 class="text-3xl font-bold">Guestbook</h1>
<p class="text-xl mb-2">Write something nice!</p>

{#if $page.data.session}
	<small>You are logged in as <strong>{$page.data.session.user?.name}</strong></small>
	<br />
	<small class="cursor-pointer" on:click={() => signOut()}><strong>Sign Out</strong></small>

	<form on:submit|preventDefault={sendMessage}>
		<input
			type="text"
			placeholder="Message"
			id="input"
			class="input w-full max-w-xs bg-base-200 mb-1 mt-1"
			bind:value={newMessage}
		/>
		<button type="submit" class="btn btn-ghost bg-base-300">Sign</button>
	</form>
{:else}
	<button class="btn gap-2 bg-black text-white m-0.5 border-none" on:click={() => signIn('github')}>
		<img src="/github-mark-white.png" width="32px" />
		Sign In with GitHub
	</button>
	<button
		class="btn gap-2 bg-[#7289DA] hover:bg-[#6A5ACD] text-white mx-0.5 my-1 bottom-1 relative border-none"
		on:click={() => signIn('discord')}
	>
		<img src="/discord-mark-white.png" width="32px" />
		Sign In with Discord
	</button>
{/if}

<div class="divider" />

<ul class="flex flex-col-reverse">
	{#each messages as message}
		<li><strong>{message.username}: </strong>{message.message}</li>
	{/each}
</ul>
