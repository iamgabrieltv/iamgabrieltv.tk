<script>
	import '../app.css';

	import Navbar from '../lib/components/navbar.svelte';
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
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/projects">Projects</a></li>
			<li><a href="/guestbook">Guestbook</a></li>
		</ul>
	</div>
</div>
