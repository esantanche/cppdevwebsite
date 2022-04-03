<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    export let color = undefined;
    export let centered = false;
    export let alignright = false;

    // let screenWidth;

    // function fontSize(screenWidth, configuration) {

    //     if (screenWidth >= configuration.responsiveBreakpoints.large)
    //         return "1.35rem";
    //     else if (screenWidth >= configuration.responsiveBreakpoints.medium)
    //         return "1.2rem";
    //     else
    //         return "1.1rem";

    // }
</script>

<style>

    .narrationtext {
        font-family: var(--font-family);
        font-weight: 400;
        color: var(--text-color);
        font-size: 20px;
        text-align: var(--aligntext);
    }

    /* font-size: var(--font-size); */


</style>

<!-- <svelte:window bind:innerWidth={screenWidth} /> -->

<!-- FIXME  I'm usinig this but it needs a lot of reowrk  -->

<div class="narrationtext" style="--font-family: {APP_CONFIGURATION.fontFamilyForStandardText};
                                  --text-color: {color ? color : APP_CONFIGURATION.defaultColorsTable['VERYDARKGREY']};
                                  --aligntext: {centered ? 'center' : (alignright ? 'right' : '')}" >
    <slot></slot>
</div>
