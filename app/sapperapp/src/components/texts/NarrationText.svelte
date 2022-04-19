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

</script>

<style>

    .narrationtext {
        font-family: var(--font-family);
        font-weight: 400;
        color: var(--text-color);
        font-size: 20px;
        text-align: var(--aligntext);
        margin-right: 10px;
        margin-left: 10px;
    }

</style>

<div class="narrationtext" style="--font-family: {APP_CONFIGURATION.fontFamilyForStandardText};
                                  --text-color: {color ? color : APP_CONFIGURATION.defaultColorsTable['VERYDARKGREY']};
                                  --aligntext: {centered ? 'center' : (alignright ? 'right' : '')}" >
    <slot></slot>
</div>
