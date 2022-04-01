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


	// import IconButton from '@smui/icon-button';

	import CoverFittingImage from "../components/images/CoverFittingImage.svelte";

	import SeparatorPane from "../components/panes/SeparatorPane.svelte";
	
	import HeadlineText from '../components/texts/HeadlineText.svelte';

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
	<title>Emanuele Santanche</title>
</svelte:head>


<h1>Emanuele Santanche</h1>

<h2>C++ code crafted here</h2>

<p>Emanuele Santanche</p>

<p>C++ code crafted here</p>

<p style="font-family: 'Bangers', cursive; font-size: 40px">We developers invented Agile</p>

<p style="font-family: 'Comic Neue', cursive; font-size: 40px">We developers invented Agile</p>



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
				<CoverFittingImage src="https://backend.emanuelesantanche.com/sites/default/files/2020-05/keith-johnston-3OQk-5DJTEE-unsplash-720x400.jpg"
													   alt="now just testing"/>
			</MediaContent>
		</Media>
		<Button on:click={() => { console.log("clicked") } }>
			<Label>click me</Label>
		</Button>
		<!-- <Content style="color: #888;">Here's some gray text down here.</Content> -->
	</Card>
</StandardLink>

<SeparatorPane/>

<div style="font-size: 4vw">Headline 1</div>

<HeadlineText>hhusdhuahda</HeadlineText>

<!-- FIXME  about texts, maybe the ones SMUI provides are responsive -->

<Button on:click={() => { console.log("clicked") } }>
    <Label>Default</Label>
</Button>

<LayoutGrid>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		<div class="demo-cell" style="height: 80px;">
		  cell 1
		</div>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		<div class="demo-cell" style="height: 80px;">
		  cell 2
		</div>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		<div class="demo-cell" style="height: 80px;">
		  cell 3
		</div>
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		<div class="demo-cell" style="height: 80px;">
		  cell 4
		</div>
	</Cell>
	
</LayoutGrid>

<!-- <MediaContent>
	<img height="100%" width="100%" src="https://backend.emanuelesantanche.com/sites/default/files/2020-05/keith-johnston-3OQk-5DJTEE-unsplash-720x400.jpg" alt="testing">
  </MediaContent> -->