<script>
	// import Nav from '../components/Nav.svelte';

	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

import IconButton from '@smui/icon-button';

	//export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<TopAppBar
      variant="static"
      color="primary"
    >
      <Row>
        <Section>
			<IconButton class="material-icons">menu</IconButton>
          <!-- <IconButton class="material-icons">menu</IconButton>
          <Title>Static</Title> -->
		  <Title>section in top bar</Title>
        </Section>
        <Section align="end" toolbar>
          <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
          <IconButton class="material-icons" aria-label="Print this page">print</IconButton>
          <IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
        </Section>
      </Row>
    </TopAppBar>


<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>