<!--
@file Just a separator with many sizes
-->

<script>

    export let size = undefined;

    const sizes = { "standard": "5vh",
                    "tall": "11vh",
                    "short": "20px",
                    "veryshort": "10px" };

    function height(size) {

        if (sizes[size])
            return sizes[size];
        else
            return sizes["standard"];

    }

</script>

<style>
    .separatorpane {
        height: var(--height);
    }
</style>

<div class="separatorpane" style="--height: {height(size)}" >

</div>
