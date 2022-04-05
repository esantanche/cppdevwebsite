<script lang="ts">
  import type { MenuComponentDev } from "@smui/menu";

  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

  import IconButton from "@smui/icon-button";

  import Menu from "@smui/menu";

  import List, { Item, Separator, Text } from "@smui/list";

  import StandardLink from "../links/StandardLink.svelte";

  import NarrationText from "../texts/NarrationText.svelte";

  let menu: MenuComponentDev;

  // FIXME  this will eventually be removed
  let clicked = "nothing yet";
</script>

<!-- FIXME  The menu needs adjustments with the drop down list having to get more on the left etc -->

<!-- FIXME  and the menu needs links etc -->

<!-- FIXME  the Contact me page is to do or goes to the bottom -->

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
        <Menu bind:this={menu} color="secondary">
          <List>
            <StandardLink to="/article/275/about-me">
              <Item>
                <Text>About me</Text>
              </Item>
            </StandardLink>
            <Item on:SMUI:action={() => (clicked = "Copy")}>
              <Text>Contact me</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = "Paste")}>
              <Text>Success stories</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = "Delete")}>
              <Text>Testimonials</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = "Delete")}>
              <Text>Agile and surroundings</Text>
            </Item>
            <Item on:SMUI:action={() => (clicked = "Delete")}>
              <Text>Problem solving</Text>
            </Item>
          </List>
        </Menu>
      </div>
    </Section>
  </Row>
</TopAppBar>
