<!--
@file The cards that link to articles or topics
-->

<script lang="ts">
	
	import Card, {
    				Content,
    				PrimaryAction,
    				Media,
    				MediaContent,
  			} from '@smui/card';

</script>

<style>
    .standardcard {
        border-radius: 10px;
    }
</style>

<div class="mdc-elevation--z{2} flexy-boy standardcard">
    <Card variant="outlined">
        <slot></slot>
    </Card>
</div>