<script lang="ts">
	// import Nav from '../components/Nav.svelte';

	import {APP_CONFIGURATION} from '../appConfiguration';
import StandardFooter from '../components/footers/StandardFooter.svelte';
import StandardHeader from '../components/headers/StandardHeader.svelte';


	// import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

// import IconButton from '@smui/icon-button';

	export let segment: string;
</script>

<style>
	main {
		position: relative;
		max-width: var(--max-width);
		background-color: white;
		/* padding: 2em; */
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<!-- This is the variable segment: {segment} -->

<!-- FIXME  why does the header have a space above it? -->

<main style="--max-width: {APP_CONFIGURATION.maxwidthforcontent};"  >
	<StandardHeader />
	<slot></slot>
	<StandardFooter />
</main>

<!-- FIXME  footer to do -->