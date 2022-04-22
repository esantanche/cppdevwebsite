<!--
@file The header of the page
-->

<script lang="ts">

  import type { MenuComponentDev } from "@smui/menu";

  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

  import IconButton from "@smui/icon-button";

  import Menu from "@smui/menu";

  import List, { Item, Separator, Text } from "@smui/list";

  import StandardLink from "../links/StandardLink.svelte";

  import NarrationText from "../texts/NarrationText.svelte";

  let menu: MenuComponentDev;

</script>

<TopAppBar variant="static" color="secondary">
  <Row>
    <Section>
      <StandardLink to="/">
        <NarrationText>&nbsp;&nbsp;Emanuele Santanche</NarrationText>
      </StandardLink>
    </Section>
    <Section align="end">
      <div style="min-width: 70px;">
        <IconButton class="material-icons" on:click={() => menu.setOpen(true)}>
          menu
        </IconButton>
        <Menu bind:this={menu} color="secondary" style="right: 0px; left: auto;">
          <List>
            <StandardLink to="/article/275/about-me">
              <Item>
                <Text>About me</Text>
              </Item>
            </StandardLink>
            <StandardLink to="/#contact-me-form">
              <Item>
                <Text>Contact me</Text>
              </Item>
            </StandardLink>
            <StandardLink to="/article/273/how-i-work">
              <Item>
                <Text>How I work</Text>
              </Item>
            </StandardLink>
            <StandardLink to="/articles/success-stories/1">
              <Item>
                <Text>Success stories</Text>
              </Item>
            </StandardLink>
            <StandardLink to="/articles/testimonials/1">
              <Item>
                <Text>Testimonials</Text>
              </Item>
            </StandardLink>
            <StandardLink to="/articles/problem-solving/1">
              <Item>
                <Text>Problem solving</Text>
              </Item>
            </StandardLink>
            <StandardLink to="/articles/agile-and-surroundings/1">
              <Item>
                <Text>Agile and surroundings</Text>
              </Item>
            </StandardLink>            
          </List>
        </Menu>
      </div>
    </Section>
  </Row>
</TopAppBar>
