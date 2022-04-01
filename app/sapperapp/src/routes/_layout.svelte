<script>
	// import Nav from '../components/Nav.svelte';

	import {APP_CONFIGURATION} from '../appConfiguration';
import StandardHeader from '../components/headers/StandardHeader.svelte';


	// import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

// import IconButton from '@smui/icon-button';

	//export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: var(--max-width);
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<!-- max-width: 56em; -->


<!-- var(--font-family); -->


<!-- <Nav {segment}/> -->

<main style="--max-width: {APP_CONFIGURATION.maxwidthforcontent};"  >
	<StandardHeader />
	<slot></slot>
</main>