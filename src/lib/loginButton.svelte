<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
</script>

<button class="btn gap-2 bg-black" on:click={() => signIn('github')}>
	<img src="/github-mark-white.png" class="w-[2rem]" />
	Sign In with GitHub
</button>
