<!--
@file Contact me form
-->

<script lang="ts">
    import {APP_CONFIGURATION} from '../../appConfiguration';

    import Textfield from '@smui/textfield';

    import HelperText from '@smui/textfield/helper-text';

    import Icon from '@smui/textfield/icon';

    import HeadlineText from '../../components/texts/HeadlineText.svelte';
    
    import Button, { Label } from '@smui/button';

    import Dialog, { Title, Content, Actions } from '@smui/dialog';

    import {error_message_from_error} from "../../helpers/errorMessages";

    import SeparatorPane from "../panes/SeparatorPane.svelte";

    let messageDialogOpen = false;
    let open = false;
    let messageDialogTitle;
    let messageDialogMessage;

    async function handleSubmit(event) {

      const message_node_details = {
          type: [{"target_id": "ems_pick_my_brain_message"}],
          title: [{"value": "New Message EMSCPP " + event.target[0].value}],
          field_name: [{"value": event.target[0].value}],
          field_email: [{"value": event.target[1].value}],
          field_message: [{"value": event.target[2].value}]
      };

      const res = await fetch(`${APP_CONFIGURATION.backendUrl}/node?_format=json`, {
          method: 'POST',
          body: JSON.stringify(message_node_details),
          headers: {
              'Content-Type': 'application/json',
              'Accepts': 'application/json'
          }
      });

      if (!res.ok) {
          

          const error_message = error_message_from_error(res);

			    console.error("Error in fetching article", error_message);

          messageDialogTitle = "Something went wrong";
          messageDialogMessage = "Please, save your message, reload the page and try again.";
          messageDialogOpen = true;

      } else {

          messageDialogTitle = "Message sent";
          messageDialogMessage = "Thank you for your message!";
          messageDialogOpen = true;

          document.getElementById('emspickmybrainmessage').reset();

      }

    }

    let Email = '';
    let Name = '';
    let Message = '';
  
</script>

<style>

  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__leading) {
    border-radius: 28px 0 0 28px;
    width: 28px;
  }
  *
    :global(.shaped-outlined
      .mdc-notched-outline
      .mdc-notched-outline__trailing) {
    border-radius: 0 28px 28px 0;
  }
  * :global(.shaped-outlined .mdc-notched-outline .mdc-notched-outline__notch) {
    max-width: calc(100% - 28px * 2);
  }
  *
    :global(.shaped-outlined.mdc-text-field--with-leading-icon:not(.mdc-text-field--label-floating)
      .mdc-floating-label) {
    left: 16px;
  }
  * :global(.shaped-outlined + .mdc-text-field-helper-line) {
    padding-left: 32px;
    padding-right: 28px;
  }

  * :global(.fieldsize) {
    width: 50%;
  }

  * :global(.textareasize) {
    width: 100%;
  }

  .contactmeform {
    margin: 20px;   
  }

</style>

<SeparatorPane size="short" />

<HeadlineText>Contact me</HeadlineText>

<form
        id="emspickmybrainmessage"
        on:submit|preventDefault="{handleSubmit}"        
        class="contactmeform"
>

    <Textfield
        id="name"
        class="shaped-outlined fieldsize"
        variant="outlined"
        bind:value={Name}
        label="Name"   
        type="text"     
        required
    >
      <Icon class="material-icons" slot="leadingIcon">perm_identity</Icon>
      <HelperText slot="helper">Your name</HelperText>
    </Textfield>

    <Textfield
        id="email"
        class="shaped-outlined fieldsize"
        variant="outlined"
        bind:value={Email}
        label="Email"   
        type="email"     
        required
    >
      <Icon class="material-icons" slot="leadingIcon">email</Icon>
      <HelperText slot="helper">Your email</HelperText>
    </Textfield>

    <Textfield 
        id="message"
        class="textareasize" 
        textarea 
        bind:value={Message} 
        label="Message" 
        required
    >
      <HelperText slot="helper">Your message</HelperText>
    </Textfield>

    <Button type="submit" variant="raised">
      <Label>SEND</Label>
    </Button>

</form>

<Dialog
  bind:open={messageDialogOpen}
  aria-labelledby="simple-title"
  aria-describedby="simple-content"
>
  <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
  <Title id="simple-title">{messageDialogTitle}</Title>
  <Content id="simple-content">{messageDialogMessage}</Content>
  <Actions>
    <Button on:click={() => (messageDialogOpen = false)}>
      <Label>OK</Label>
    </Button>
  </Actions>
</Dialog>
