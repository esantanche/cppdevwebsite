<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>

    export let src;

    export let alt;

    // FIXME  maybe I need a background color for the images that are png with transparency

</script>

<style>

    .headerimage {
        width: 100%;
    }

</style>

<img src={src} alt={alt} class="headerimage" />


<!-- FIXME  keep this in case you need a background color if images are png with transparency -->

<!-- export let backgroundColor = undefined;
+    // FIXME  maybe I need a background color for the images that are png with transparency
 
 </script>
 
@@ -20,9 +18,8 @@ help search engines to index the item's page.
 
     .headerimage {
         width: 100%;
-        background-color: var(--background-color);
     }
 
 </style>
 
-<img src={src} alt={alt} class="headerimage" style="--background-color: {backgroundColor ? backgroundColor : 'inherit'}"/>
+<img src={src} alt={alt} class="headerimage" /> -->
