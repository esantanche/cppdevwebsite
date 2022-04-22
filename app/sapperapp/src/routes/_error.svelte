<!--
@file Error message in case something goes wrong or there is a 404
-->

<script lang="ts">
	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1, p {
		margin: 0 auto;
	}

	h1 {
		font-size: 1.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 2.5em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

{#if status === 404}
	<h1>Sorry, we couldn't find the page you are looking for.</h1>

	<p>You may want to restart from the <a href="/">home</a>.</p>
{:else}
	<h1>Sorry, there has been a problem. Please reload the page.</h1>

	<p>Status: {status}</p>

	<p>Error message: {error.message}</p>
{/if}

{#if dev}
	<p>This is a development environment</p>
{/if}

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}