<!--
@file The images you see on the cards
-->

<script>

    export let src;

    export let alt;

</script>

<style>

    .coverfittingimage {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }

</style>

<img src={src} alt={alt} class="coverfittingimage"/>
