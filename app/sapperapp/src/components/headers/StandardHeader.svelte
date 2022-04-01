<script lang="ts">
    
        import { MenuComponentDev } from '@smui/menu';
        import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';

import IconButton from '@smui/icon-button';

import Menu from '@smui/menu';


import List, { Item, Separator, Text } from '@smui/list';

    // import MenuButtonPane from "../panes/MenuButtonPane.svelte";
    // import StandardIcon from "../icons/StandardIcon.svelte";
    import {APP_CONFIGURATION} from '../../appConfiguration';

    //import StandardMenu from "../menus/StandardMenu.svelte";
    import ContentPane from "../panes/ContentPane.svelte";
    // import WideContentPane from "../panes/WideContentPane.svelte";

    // import SpaceBetweenPane from "../panes/SpaceBetweenPane.svelte";
    // import NarrationText from "../texts/NarrationText.svelte";
    // import StandardLink from "../links/StandardLink.svelte";
    // import LogoPane from "../panes/LogoPane.svelte";
    // import FlexStartPane from "../panes/FlexStartPane.svelte";
    // import SpacerPane from "../panes/SpacerPane.svelte";

    let menuButtonVisible = true;

    function onclick() {

        menuButtonVisible = false;

    }

    function onclose() {

        menuButtonVisible = true;

    }

   

  let menu: MenuComponentDev;

  let clicked = 'nothing yet';

</script>

<TopAppBar
      variant='static'
      color='secondary'>
      <Row>
        <Section>
          <Title>Emanuele Santanche</Title>
        </Section>
        <Section align="end" toolbar>
            <IconButton class="material-icons" on:click={() => menu.setOpen(true)}>menu</IconButton>
            <Menu bind:this={menu}>
                <List>
                  <Item on:SMUI:action={() => (clicked = 'Cut')}>
                    <Text>Cut</Text>
                  </Item>
                  <Item on:SMUI:action={() => (clicked = 'Copy')}>
                    <Text>Copy</Text>
                  </Item>
                  <Item on:SMUI:action={() => (clicked = 'Paste')}>
                    <Text>Paste</Text>
                  </Item>
                  <Separator />
                  <Item on:SMUI:action={() => (clicked = 'Delete')}>
                    <Text>Delete</Text>
                  </Item>
                </List>
              </Menu>
        </Section>
      </Row>
</TopAppBar>


<!-- 
{#if menuButtonVisible}

    <ContentPane noPadding={true}
                 backgroundColor={APP_CONFIGURATION.defaultColorsTable["PASTELGREEN"]}
                 makeItSticky={true}
                 doShadow={true}
                 doTransparency={true}>

        <div>rrr</div>

    </ContentPane>

{:else}
     <StandardMenu on:close={onclose}/> 
    <div>menuButtonVisible is false</div>
{/if} -->


<!-- <FullWidthPane noPadding={true}
                   backgroundColor={APP_CONFIGURATION.defaultColorsTable["PASTELGREEN"]}
                   makeItSticky={true}
                   doShadow={true}
                   doTransparency={true}>

        <SpacerPane>
            <WideContentPane backgroundColor="inherit">
                <SpaceBetweenPane>
                    <FlexStartPane>

                        <StandardLink to="/">
                            <LogoPane>
                                <img src="logo-es.png" alt="Emanuele Santanche" width="100%" />
                            </LogoPane>
                        </StandardLink>
                        <div>
                            <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                                Emanuele Santanché
                            </NarrationText>
                            <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                                Leadership coach for technology
                            </NarrationText>
                        </div>

                    </FlexStartPane>
                    <MenuButtonPane>

                        <StandardIcon on:click={onclick} clickable={true}>
                            menu
                        </StandardIcon>

                    </MenuButtonPane>
                </SpaceBetweenPane>
            </WideContentPane>
        </SpacerPane>

    </FullWidthPane> -->