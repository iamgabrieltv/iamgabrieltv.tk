<script>
	import '../app.css';

	import Navbar from '../lib/components/navbar.svelte';

	function closeSidebar() {
		document.getElementById('my-drawer-2').checked = false;
	}
</script>

<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
		<!-- Page content here -->
		<Navbar />

		<div class="ml-4 mr-4 mt-1">
			<slot />
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			<li><a href="/" on:click={closeSidebar}>Home</a></li>
			<li><a href="/about" on:click={closeSidebar}>About</a></li>
			<li><a href="/projects" on:click={closeSidebar}>Projects</a></li>
			<li><a href="/guestbook" on:click={closeSidebar}>Guestbook</a></li>
		</ul>
	</div>
</div>
