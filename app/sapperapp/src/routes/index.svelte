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

	import CoverFittingImage from "../components/images/CoverFittingImage.svelte";

	import SeparatorPane from "../components/panes/SeparatorPane.svelte";
	
	import HeadlineText from '../components/texts/HeadlineText.svelte';
	
	import StandardCard from '../components/cards/StandardCard.svelte';
	import ContactMeForm from '../components/forms/ContactMeForm.svelte';

</script>

<style>

</style>

<svelte:head>
	<title>Emanuele Santanche</title>
</svelte:head>

<SeparatorPane />

<HeadlineText>Emanuele Santanche</HeadlineText>

<SeparatorPane />

<HeadlineText>C++ code crafted here</HeadlineText>

<SeparatorPane />

<HeadlineText comic={true}>We developers invented Agile</HeadlineText>

<SeparatorPane />

<!-- FIXME  
articles to do and to put at the top
how i work --- also in the menu
what is c++ for?  -- maybe also in the menU?
github 
maybe more tech I can use? javascript, bash, linux, java, react, etc.
about me is only in the menu instead, and it's to be rewritten
-->

<LayoutGrid>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		
			<StandardLink to={"/article/273/how-i-work"}>
	
				<StandardCard>
					<Media class="card-media-16x9" aspectRatio="16x9">
						<MediaContent>
							<CoverFittingImage src="https://backend.emanuelesantanche.com/sites/default/files/2022-04/fatos-bytyqi-Agx5_TLsIf4-unsplash-small.jpg"
											   alt="How I work"/>
						</MediaContent>
					</Media>
					<Button>
						<Label>How I work</Label>
					</Button>
				</StandardCard>
				
			</StandardLink>
		
	</Cell>
	<!-- what-is-c-for -->

	<!-- on:click={() => { console.log("clicked") }  -->

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		
			<StandardLink to={"/article/274/what-is-c-for"}>
	
				<StandardCard>
					<Media class="card-media-16x9" aspectRatio="16x9">
						<MediaContent>
							<CoverFittingImage src="https://backend.emanuelesantanche.com/sites/default/files/2022-04/C%2B%2B.jpg"
											   alt="What is C++ for?"/>
						</MediaContent>
					</Media>
					<Button>
						<Label>What is C++ for?</Label>
					</Button>
				</StandardCard>
				
			</StandardLink>
		
	</Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		
		<StandardLink to={"https://github.com/esantanche"}>

			<StandardCard>
				<Media class="card-media-16x9" aspectRatio="16x9">
					<MediaContent>
						<CoverFittingImage src="GitHub_Logo.png"
										   alt="My GitHub account"/>
					</MediaContent>
				</Media>
				<Button>
					<Label>My GitHub account</Label>
				</Button>
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
			  <Button>
				  <Label>Problem solving</Label>
			  </Button>
		  </StandardCard>
		  
	  </StandardLink>

    </Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		
		<StandardLink to={"/articles/agile-and-surroundings/1"}>
  
		  <StandardCard>
			  <Media class="card-media-16x9" aspectRatio="16x9">
				  <MediaContent>
					  <CoverFittingImage src="Agile_and_surroundings.jpg"
										 alt="Agile and surroundings"/>
				  </MediaContent>
			  </Media>
			  <Button>
				  <Label>Agile and surroundings</Label>
			  </Button>
		  </StandardCard>
		  
	  </StandardLink>

    </Cell>
	
	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		
		<StandardLink to={"/articles/success-stories/1"}>
  
		  <StandardCard>
			  <Media class="card-media-16x9" aspectRatio="16x9">
				  <MediaContent>
					  <CoverFittingImage src="Success_stories.jpg"
										 alt="Success stories"/>
				  </MediaContent>
			  </Media>
			  <Button>
				  <Label>Success stories</Label>
			  </Button>
		  </StandardCard>
		  
	  </StandardLink>

    </Cell>

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		
		<StandardLink to={"/articles/testimonials/1"}>
  
		  <StandardCard>
			  <Media class="card-media-16x9" aspectRatio="16x9">
				  <MediaContent>
					  <CoverFittingImage src="Testimonials.jpg"
										 alt="Testimonials"/>
				  </MediaContent>
			  </Media>
			  <Button>
				  <Label>Testimonials</Label>
			  </Button>
		  </StandardCard>
		  
	  </StandardLink>

    </Cell>

	<Cell spanDevices={{ desktop: 12, tablet: 8, phone: 4 }}>
		
		<ContactMeForm />

    </Cell>

</LayoutGrid>
