<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<!-- FIXME to dos
the parameter color for now is not needed, headline text is black
large may be useful, but later
comic is useful
-->



<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    // export let color = undefined;
    export let large = undefined;
    export let comic = undefined;

    // console.log(APP_CONFIGURATION);

</script>

<style>
    .headlinetext {
        font-family: var(--font-family);
        font-weight: 600;
        line-height: 1.15;
        text-align: center;
        color: #000;
        font-size: var(--font-size);
    }
</style>


<!-- <style>
    .headlinetext {
        font-family: var(--font-family);
        font-weight: 600;
        line-height: 1.15;
        text-align: center;
        color: var(--text-color);
        font-size: var(--font-size);
    }
</style> -->

<!-- <svelte:window bind:innerWidth={screenWidth} /> -->

<div class="headlinetext" style="--font-family: {comic ? APP_CONFIGURATION.fontFamilyForComicText : APP_CONFIGURATION.fontFamilyForStandardText};
                                 --font-size: {large ? "4vw" : "3vw"}">
    <slot></slot>
</div>

<!-- 
<div class="headlinetext" style="--font-family: {APP_CONFIGURATION.fontFamily};
                                  --text-color: {color ? color : APP_CONFIGURATION.defaultColorsTable['WHITESHADE']}"  >
    <slot></slot>
</div> -->

<!--text-align: center;-->