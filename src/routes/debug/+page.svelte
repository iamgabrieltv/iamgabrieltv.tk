<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		const response = await (await fetch('/api/destiny')).json();
		console.log(response);
	});
</script>
