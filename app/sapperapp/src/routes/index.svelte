<script>
	import successkid from 'images/successkid.jpg';

	// import Card from '@smui/card';

	import Card, { Content, Actions } from '@smui/card';

	import Button, { Label } from '@smui/button';

	// import Content from '@smui/content';
</script>

<style>

/* FIXME  do i need this stuff? */

	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt="Success Kid" src="{successkid}">
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing  ermFIXMea  this file (src/routes/index.svelte) to test live reloading.</strong></p>

<div class="mdc-elevation--z{2} flexy-boy">
	<Card>
		<Content>elevated <code>Content</code>.</Content>
	</Card>
</div>

<div style="height: 30px"></div>

<Card>
	<Content>You can also use <code>Content</code>.</Content>
</Card>

<Card variant="outlined" padded>An outlined, padded card.</Card>

<Button on:click={() => { console.log("clicked") } }>
    <Label>Default</Label>
</Button>