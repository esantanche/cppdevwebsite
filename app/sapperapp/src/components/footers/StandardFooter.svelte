<!--
@file The footer of the page
-->

<script>
    import {APP_CONFIGURATION} from '../../appConfiguration';
    // import WideContentPane from "../panes/WideContentPane.svelte";
    // import SpaceBetweenPane from "../panes/SpaceBetweenPane.svelte";
    import NarrationText from "../texts/NarrationText.svelte";
    import StandardLink from "../links/StandardLink.svelte";
    // import SeparatorPane from "../panes/SeparatorPane.svelte";

    import LayoutGrid, { Cell } from '@smui/layout-grid';

</script>

<div style={"background-color: " + APP_CONFIGURATION.defaultColorsTable['PASTELGREEN']}>
<LayoutGrid>

    <Cell spanDevices={{ desktop: 6, tablet: 4, phone: 2 }}>
		
        <NarrationText>
            Emanuele Santanche
        </NarrationText>

    </Cell>

    <Cell spanDevices={{ desktop: 6, tablet: 4, phone: 2 }} align="end">
		
        <StandardLink to="/article/58/privacy-policy">
            <NarrationText alignright={true}>Privacy policy</NarrationText>       
        </StandardLink>
       
    </Cell>
</LayoutGrid>
</div>

