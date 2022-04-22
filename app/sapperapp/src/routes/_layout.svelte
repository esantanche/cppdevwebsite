<!--
@file Layout of the page
-->

<script lang="ts">

	import {APP_CONFIGURATION} from '../appConfiguration';
	import StandardFooter from '../components/footers/StandardFooter.svelte';
	import StandardHeader from '../components/headers/StandardHeader.svelte';
	import RDFaTags from "../components/tags/RDFaTags.svelte";

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

<svelte:head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-C1JNY5EBLF"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-C1JNY5EBLF');
	</script>
</svelte:head>

<RDFaTags />

<main style="--max-width: {APP_CONFIGURATION.maxwidthforcontent};"  >
	<StandardHeader />
	<slot></slot>
	<StandardFooter />
</main>
