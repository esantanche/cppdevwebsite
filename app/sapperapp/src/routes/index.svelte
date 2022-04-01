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
import StandardCard from '../components/cards/StandardCard.svelte';

</script>

<style>

</style>

<svelte:head>
	<title>Emanuele Santanche</title>
</svelte:head>

<SeparatorPane />

<HeadlineText>Emanuele Santanche</HeadlineText>
<!-- <h1>Emanuele Santanche</h1> -->

<SeparatorPane />

<!-- <HeadlineText large={true}>C++ code crafted here</HeadlineText> -->

<HeadlineText>C++ code crafted here</HeadlineText>

<SeparatorPane />

<HeadlineText comic={true}>We developers invented Agile</HeadlineText>

<SeparatorPane />


<!-- <StandardCard>

	<Card>
		<Content>elevafreewrferted <code>Contsdfsdfent</code>.</Content>
	</Card>
</StandardCard> -->
<!-- 
<StandardLink to={"http://www.ibm.com"}>
<Card>
	<Content>You can also use <code>Content</code>.</Content>
</Card>
</StandardLink> -->

<div style="height: 30px"></div>

<!-- <StandardLink to={"http://www.ibm.com"}>
	
	<StandardCard>
		<Media class="card-media-16x9" aspectRatio="16x9">
			<MediaContent>
				<CoverFittingImage src="https://backend.emanuelesantanche.com/sites/default/files/2020-05/keith-johnston-3OQk-5DJTEE-unsplash-720x400.jpg"
													alt="now just testing"/>
			</MediaContent>
		</Media>
		<Button on:click={() => { console.log("clicked") } }>
			<Label>click me</Label>
		</Button>
		 <Content style="color: #888;">Here's some gray text down here.</Content>
	</StandardCard>
	
</StandardLink> -->

<SeparatorPane/>

<Button on:click={() => { console.log("clicked") } }>
    <Label>Default</Label>
</Button>

<!-- FIXME  
articles to do and to put at the top
how i work --- also in the menu
what is c++ for?  -- maybe also in the menU?
about me is only in the menu instead
-->

<!-- FIXME  maybe instead of what is c++ for I write about the tech I use? so that I can add Rust? dunno -->

<LayoutGrid>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		
			<StandardLink to={"/article/199/catch-the-tech"}>
	
				<StandardCard>
					<Media class="card-media-16x9" aspectRatio="16x9">
						<MediaContent>
							<CoverFittingImage src="https://backend.emanuelesantanche.com/sites/default/files/2020-05/keith-johnston-3OQk-5DJTEE-unsplash-720x400.jpg"
											   alt="now just testing"/>
						</MediaContent>
					</Media>
					<Button on:click={() => { console.log("clicked") } }>
						<Label>How I work</Label>
					</Button>
					<!-- <Content style="color: #888;">Here's some gray text down here.</Content> -->
				</StandardCard>
				
			</StandardLink>
		
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		
			<StandardLink to={"http://www.ibm.com"}>
	
				<StandardCard>
					<Media class="card-media-16x9" aspectRatio="16x9">
						<MediaContent>
							<CoverFittingImage src="https://backend.emanuelesantanche.com/sites/default/files/2020-05/keith-johnston-3OQk-5DJTEE-unsplash-720x400.jpg"
																alt="now just testing"/>
						</MediaContent>
					</Media>
					<Button on:click={() => { console.log("clicked") } }>
						<Label>What is C++ for?</Label>
					</Button>
					<!-- <Content style="color: #888;">Here's some gray text down here.</Content> -->
				</StandardCard>
				
			</StandardLink>
		
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		
		  <StandardLink to={"/articles/problem-solving/1"}>
	
			<StandardCard>
				<Media class="card-media-16x9" aspectRatio="16x9">
					<MediaContent>
						<CoverFittingImage src="topics-alex-knight-tech-watch-unsplash-600x400.jpg"
										   alt="Problem solving"/>
					</MediaContent>
				</Media>
				<Button on:click={() => { console.log("clicked") } }>
					<Label>Problem solving</Label>
				</Button>
			</StandardCard>
			
		</StandardLink>

		

	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		
		  cell 4
		
	</Cell>
	
</LayoutGrid>
