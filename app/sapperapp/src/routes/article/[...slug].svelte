<!--
@file This shows a single article
-->

<script context="module">

	import {APP_CONFIGURATION} from '../../appConfiguration';
	import {error_message_from_error} from "../../helpers/errorMessages";

	export async function preload({path, params}) {

		let [nid] = params.slug;

		const res = await this.fetch(`${APP_CONFIGURATION.backendUrl}/rest/EMS/view/article?_format=json&nid=${nid}`);

		if (!res.ok) {

			console.error("Error in fetching article", res);

			const error_message = error_message_from_error(res);

			console.error("Error in fetching article", error_message);

			throw new Error(error_message);

		} else {

			const jsonresponse = await res.json();

			const article = jsonresponse[0];

			const dataBundle = {
				article: article,
				path: path
			};

			return {dataBundle};

		}

	}

</script>

<script>
	import HeaderImage from "../../components/images/HeaderImage.svelte";
	import SeparatorPane from "../../components/panes/SeparatorPane.svelte";
	import HeadlineText from "../../components/texts/HeadlineText.svelte";
	import NarrationText from "../../components/texts/NarrationText.svelte";

	import { onMount } from "svelte";
  	let PdfViewer;

	onMount(async () => {
		const module = await import("svelte-pdf");
		PdfViewer = module.default;
	});

	export let dataBundle;
</script>

<style>

</style>

<!-- The field dataBundle.article.field_header_image and similar start with a backslash, no need
to add one -->

<svelte:head>
	<meta property="og:title" content={dataBundle.article.title} />
	<meta property="og:image" content={dataBundle.article.field_header_image ?
		  APP_CONFIGURATION.backendUrl + dataBundle.article.field_header_image :
		  APP_CONFIGURATION.backendUrl + dataBundle.article.field_image} />
	<meta property='og:description' content={dataBundle.article.field_description} />
	<meta name=”description” content={dataBundle.article.field_description}>
	<meta property='og:url' content={APP_CONFIGURATION.homePageUrl + dataBundle.path} />
	<title>Emanuele Santanche, {dataBundle.article.title}</title>
</svelte:head>

{#if dataBundle.article.field_header_image}
		<HeaderImage src={APP_CONFIGURATION.backendUrl + dataBundle.article.field_header_image}
					 alt={dataBundle.article.title}/>
{/if}

<SeparatorPane/>

{#if dataBundle.article.field_attachment_file_name}
	<svelte:component this={PdfViewer} 
	                  url={APP_CONFIGURATION.homePageUrl + "/" + dataBundle.article.field_attachment_file_name}
	                  scale={APP_CONFIGURATION.scaleforpdfviewer}
					  flipTime=20/>
	<SeparatorPane/>
{/if}

<HeadlineText>

	{dataBundle.article.title}
	<SeparatorPane/>

</HeadlineText>

<NarrationText>

    {@html dataBundle.article.body}

</NarrationText>
