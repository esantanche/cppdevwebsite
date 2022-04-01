<script>
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

</script>

{#if menuButtonVisible}

    <ContentPane noPadding={true}
                 backgroundColor={APP_CONFIGURATION.defaultColorsTable["PASTELGREEN"]}
                 makeItSticky={true}
                 doShadow={true}
                 doTransparency={true}>

        <div>rrr</div>

    </ContentPane>

{:else}
    <!-- <StandardMenu on:close={onclose}/> -->
    <div>menuButtonVisible is false</div>
{/if}


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