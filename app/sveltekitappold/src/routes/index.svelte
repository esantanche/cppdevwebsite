<script lang="ts">
	import Button, { Label, Icon } from '@smui/button';
	let clicked = 0;

	function handleClick(event) {
        console.log("in handleClick");
		//event = event as MouseEvent;
		if (event.button === 0) {
			clicked++;
		} else if (event.button === 1) {
			clicked = 0;
		}
	}
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
test here

<Button n:mousedown={handleClick}>
	<Icon class="material-icons">thumb_up</Icon>
	<Label>Click Me</Label>
</Button>

{#if clicked}
		You've clicked the button {clicked} time{clicked === 1 ? '' : 's'}. Middle click the button to
		reset.
{:else}
		<span class="grayed">You haven't clicked the button.</span>
{/if}