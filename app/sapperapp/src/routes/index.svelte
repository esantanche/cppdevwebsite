<script lang="ts">
	
	import Card, {
    				Content,
    				PrimaryAction,
    				Media,
    				MediaContent,
  			} from '@smui/card';

	import Button, { Label } from '@smui/button';

	import StandardLink from "../components/links/StandardLink.svelte";

	import LayoutGrid, { Cell } from '@smui/layout-grid';

</script>

<style>

/* FIXME  do i need this stuff? */

	/* h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	} */

	/* p {
		margin: 1em auto;
	} */

	/* @media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	} */
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>


<p><strong>Try editing  ermFIXMea  this file (src/routes/index.svelte) to test live reloading.</strong></p>

<div class="mdc-elevation--z{2} flexy-boy">
	<Card>
		<Content>elevated <code>Content</code>.</Content>
	</Card>
</div>

<div style="height: 30px"></div>


<StandardLink to={"http://www.ibm.com"}>
<Card>
	<Content>You can also use <code>Content</code>.</Content>
</Card>
</StandardLink>

<div style="height: 30px"></div>

<StandardLink to={"http://www.ibm.com"}>
	<Card variant="outlined">
		<Media class="card-media-16x9" aspectRatio="16x9">
			<MediaContent>
			<img height="100%" width="100%" style="border-radius: 10px" src="https://backend.emanuelesantanche.com/sites/default/files/2020-05/keith-johnston-3OQk-5DJTEE-unsplash-720x400.jpg" alt="testing">
			</MediaContent>
		</Media>
		<Button on:click={() => { console.log("clicked") } }>
			<Label>click me</Label>
		</Button>
		<!-- <Content style="color: #888;">Here's some gray text down here.</Content> -->
	</Card>
</StandardLink>

<Button on:click={() => { console.log("clicked") } }>
    <Label>Default</Label>
</Button>

<LayoutGrid>
	{#each Array(9) as _unused, i}
	  <Cell>
		<div class="demo-cell">Cell {i + 1}</div>
	  </Cell>
	{/each}
  </LayoutGrid>

<!-- <MediaContent>
	<img height="100%" width="100%" src="https://backend.emanuelesantanche.com/sites/default/files/2020-05/keith-johnston-3OQk-5DJTEE-unsplash-720x400.jpg" alt="testing">
  </MediaContent> -->