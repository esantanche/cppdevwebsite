<script>
	// import Nav from '../components/Nav.svelte';

	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

import IconButton from '@smui/icon-button';

	//export let segment;
</script>

<!-- FIXME  this will be needed in the header, so it may become its own component -->

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>



<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>