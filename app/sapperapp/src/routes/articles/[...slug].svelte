<!--
@file This shows a list of articles related to a topic 
-->

<script context="module">

	import {APP_CONFIGURATION} from '../../appConfiguration';
	import {titleToSlug} from '../../helpers/title_to_slug';
	import {error_message_from_error} from "../../helpers/errorMessages";

	export async function preload({params}) {

		let [topic, page] = params.slug;

		if (typeof page == "undefined")
			page = 1;
		else
			page = parseInt(page);

		let topicForRestApi = APP_CONFIGURATION.topicURL2topicLookupTable[topic];

		switch (topicForRestApi) {
			case "Problem solving":
				topicForRestApi = "Talking about my experiences";
				break;			
			case "Agile and surroundings":
				topicForRestApi = "Leadership";
				break;
		}

		const res = await this.fetch(`${APP_CONFIGURATION.backendUrl}/rest/EMS/v2/view/articles?_format=json&field_ems_topic_target_id=${topicForRestApi}&page=${page - 1}`);

		if (!res.ok) {

			console.error("Error in fetching articles list", res);

			const error_message = error_message_from_error(res);

			console.error("Error in fetching article", error_message);

			throw new Error(error_message);

		} else {

			const jsonresponse = await res.json();

			const articles = jsonresponse.results;

			const dataBundle = {
				articles: articles,
				count: jsonresponse.count,
				topic: topic,
				page: page
			};

			return {dataBundle};
		}

	}

</script>

<script>
	import StandardLink from "../../components/links/StandardLink.svelte";
	import HeadlineText from "../../components/texts/HeadlineText.svelte";
	import StandardCard from '../../components/cards/StandardCard.svelte';

	import Card, {
    				Content,
    				PrimaryAction,
    				Media,
    				MediaContent,
  			} from '@smui/card';

	import CenteringPane from "../../components/panes/CenteringPane.svelte";
	import SeparatorPane from "../../components/panes/SeparatorPane.svelte";

	import Button, { Label } from '@smui/button';

	import LayoutGrid, { Cell } from '@smui/layout-grid';

	import CoverFittingImage from "../../components/images/CoverFittingImage.svelte";

	export let dataBundle;

	let screenWidth;
     
	/**
	 * FIXME just docs
	 * page starts from 1
	 *
	 * @param page
	 * @param count
	 * @param pagesize
	 * @returns {boolean}
	 */
	function morePages(page, count, pagesize) {

		return (page * pagesize) < count;
	}

</script>

<svelte:head>
	<title>Emanuele Santanche, {APP_CONFIGURATION.topicURL2topicLookupTable[dataBundle.topic]}</title>
</svelte:head>

<SeparatorPane />

<HeadlineText>{APP_CONFIGURATION.topicURL2topicLookupTable[dataBundle.topic]}</HeadlineText>

<LayoutGrid>

{#each dataBundle.articles as article}

	<Cell spanDevices={{ desktop: 6, tablet: 4, phone: 4 }}>
		
		<StandardLink to={"/article/" + article.nid + "/" + titleToSlug(article.title)}>

			<StandardCard>
				<Media class="card-media-16x9" aspectRatio="16x9">
					<MediaContent>
						<CoverFittingImage src={APP_CONFIGURATION.backendUrl + article.field_image}
										   alt={article.title}/>
					</MediaContent>
				</Media>
				<Button>
					<Label>{article.title}</Label>
				</Button>
				
			</StandardCard>
			
		</StandardLink>
	
	</Cell>

{/each}

</LayoutGrid>

{#if morePages(dataBundle.page, dataBundle.count, APP_CONFIGURATION.fetchPageSize)}

	<CenteringPane>
		<StandardLink to={"/articles/" + dataBundle.topic + "/" + (dataBundle.page + 1)}>
			<Button variant="outlined">
				<Label>Next</Label>
			</Button>
		</StandardLink>
	</CenteringPane>

	<SeparatorPane size="short" />

{/if} 
