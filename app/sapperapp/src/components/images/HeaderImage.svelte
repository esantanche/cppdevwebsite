<!--
@file The image on top of an article, if it has one
-->

<script>

    export let src;

    export let alt;

</script>

<style>

    .headerimage {
        width: 100%;
    }

</style>

<img src={src} alt={alt} class="headerimage" />
