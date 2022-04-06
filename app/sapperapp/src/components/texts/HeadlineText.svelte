<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    export let large = undefined;
    export let comic = undefined;

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

<div class="headlinetext" style="--font-family: {comic ? APP_CONFIGURATION.fontFamilyForComicText : APP_CONFIGURATION.fontFamilyForStandardText};
                                 --font-size: {large ? "4vw" : "3vw"}">
    <slot></slot>
</div>
