<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.

You read "Let me defend you" many times, but it's an old expression.
I left it because I didn't want to change everything.
-->

<script>
    import {APP_CONFIGURATION} from '../../appConfiguration';

    import Textfield from '@smui/textfield';

    import HelperText from '@smui/textfield/helper-text';

    import Icon from '@smui/textfield/icon';

    // import {error_message_from_error} from "../../helpers/errorMessages";
    // import * as Sentry from '@sentry/browser';

    // import StandardButton from "../buttons/StandardButton.svelte";
    // import SeparatorPane from "../panes/SeparatorPane.svelte";
    // import StandardLabel from "../labels/StandardLabel.svelte";
    // import MessageDialog from "../dialogs/MessageDialog.svelte";
    // import CenteringPane from "../panes/CenteringPane.svelte";

    let messageDialogOpen = false;
    let messageDialogTitle;
    let messageDialogMessage;
    let messageDialogItIsAnErrorMessage;

    async function handleSubmit(event) {

        const message_node_details = {
            type: [{"target_id": "ems_pick_my_brain_message"}],
            title: [{"value": "New Message EMSCPP " + event.target.name.value}],
            field_name: [{"value": event.target.name.value}],
            field_email: [{"value": event.target.email.value}],
            field_message: [{"value": event.target.message.value}]
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
            console.error("Error in sending message", res);

            const error_message = error_message_from_error(res);

            Sentry.captureMessage(error_message);

            messageDialogItIsAnErrorMessage = true;
            messageDialogTitle = "Something went wrong";
            messageDialogMessage = "Please, save your message, reload the page and try again.";
            messageDialogOpen = true;

        } else {

            messageDialogItIsAnErrorMessage = false;
            messageDialogTitle = "Message sent";
            messageDialogMessage = "Thank you for your message!";
            messageDialogOpen = true;

            document.getElementById('letmedefendyouform').reset();

        }

    }

    function validateField(event) {
        let field = event.target;

        switch (field.id) {
            case "name":
                if (field.value === '') {
                    field.setCustomValidity('The name is required');
                } else {
                    field.setCustomValidity('');
                }
                break;
            case "email":
                if (field.value === '') {
                    field.setCustomValidity('The email address is required');
                } else if (field.validity.typeMismatch) {
                    field.setCustomValidity('Please enter a valid email address');
                } else {
                    field.setCustomValidity('');
                }
                break;
            case "message":
                if (field.value === '') {
                    field.setCustomValidity('The message is required');
                } else {
                    field.setCustomValidity('');
                }
                break;
            default:
                const error_message = "Impossible! In validateField I got a field.id that is not managed! field.id=" + field.id;
                console.error(error_message);
                Sentry.captureMessage(error_message);
        }

        return true;
    }


    let Email = '';
    let Name = '';
    let Message = '';
  let valueB = '';
  let valueC = '';
  let valueD = '';
</script>

<style>

    /* FIXME  do i need these classes? */

    /* .emspickmybrainform {
        margin-right: 10px;
    }

    .emspickmybrainform input:invalid, .emspickmybrainform textarea:invalid  {
        background-color: #ffdca8;
    }

    .emspickmybrainform input:valid, .emspickmybrainform textarea:valid  {
        background-color: #e9fbd0;
    } */

    /* FIXME  do I need this? */

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
</style>

<!-- FIXME  once successfully sent the message, clean the form up  -->

<form
        id="emspickmybrainmessage"

        on:submit|preventDefault="{handleSubmit}"
        on:invalid={validateField}
        on:changed={validateField}
        on:input={validateField}

        

>

<!-- type="email" -->

    <Textfield
        class="shaped-outlined"
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
        class="shaped-outlined"
        variant="outlined"
        bind:value={Email}
        label="Email"   
        type="email"     
        required
    >
      <Icon class="material-icons" slot="leadingIcon">email</Icon>
      <HelperText slot="helper">Your email</HelperText>
    </Textfield>

    <!-- FIXME  what about an icon here? https://fonts.google.com/icons?selected=Material+Icons&icon.query=message -->

    <Textfield textarea bind:value={Message} label="Message" required>
        <HelperText slot="helper">Your message</HelperText>
    </Textfield>

    <!-- <pre class="status">Value: {Email}</pre> -->

    <!-- <StandardLabel fieldFor="name">Name</StandardLabel>
    <SeparatorPane size="veryshort" />
    <input required type="text" id="name" style="margin-right: 10px"/>

    <SeparatorPane/>

    <StandardLabel fieldFor="email">Email</StandardLabel>
    <SeparatorPane size="veryshort" />
    <input required type="email" id="email" />

    <SeparatorPane/>

    <StandardLabel fieldFor="message">Message</StandardLabel>
    <SeparatorPane size="veryshort" />
    <textarea required id="message" rows="5" cols="30" />

    <SeparatorPane/>

    <CenteringPane>
        <StandardButton>
            Send the message
        </StandardButton>
    </CenteringPane> -->


</form>

<!-- FIXME  SMUI has dialog -->

<!-- 
{#if messageDialogOpen}

    <MessageDialog on:click={() => messageDialogOpen = false}
                   title={messageDialogTitle}
                   message={messageDialogMessage}
                   it_is_an_error_message={messageDialogItIsAnErrorMessage}/>

{/if} -->