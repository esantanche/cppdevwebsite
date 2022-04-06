<script lang="ts">

	import {APP_CONFIGURATION} from '../appConfiguration';
	import StandardFooter from '../components/footers/StandardFooter.svelte';
	import StandardHeader from '../components/headers/StandardHeader.svelte';

	export const segment: string = "";
	
</script>

<style>
	main {
		position: relative;
		max-width: var(--max-width);
		background-color: white;		
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<main style="--max-width: {APP_CONFIGURATION.maxwidthforcontent};"  >
	<StandardHeader />
	<slot></slot>
	<StandardFooter />
</main>
