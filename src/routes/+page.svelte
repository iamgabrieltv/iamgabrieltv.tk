<script lang="ts">
	import { light } from '$lib/theme';
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
		class="hover:scale-[1.025] transition-all duration-75 cursor-pointer shadow-xl h-auto w-96 rounded-md"
	>
		{#if $light}
			<img
				alt="Discord Presence"
				src="https://lanyard.cnrad.dev/api/468100897860485120?theme=light&bg=e8e9eb"
			/>
		{:else}
			<img alt="Discord Presence" src="https://lanyard.cnrad.dev/api/468100897860485120" />
		{/if}
	</a>
</div>
