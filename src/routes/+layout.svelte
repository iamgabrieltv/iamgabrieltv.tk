<script>
	import '../app.css';

	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	import Navbar from '../lib/navbar.svelte';

	onMount(() => {
  themeChange(false)
})
</script>

<Navbar />

<slot />
