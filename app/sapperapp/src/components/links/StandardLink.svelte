<!--
@file Links to other pages or external sites
-->

<script>

    export let to;

</script>

<style>
    .standardlink {
        color: inherit;
        text-decoration: none;
    }
</style>

<a on:click rel="prefetch" href={to} class="standardlink">
    <slot></slot>
</a>
