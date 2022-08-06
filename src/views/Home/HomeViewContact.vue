<template>
  <div class="contact">
    <h1>Leave a message</h1>
    <form @submit.prevent="submit">
      <FInput
        v-model="username"
        customClasses="field"
        label="Name"
        required
        size="sm"
        ref="firstInput"
      />

      <FInput
        v-model="email"
        required
        customClasses="field"
        label="Email"
        size="sm"
      />

      <FInput
        v-model="message"
        customClasses="field"
        required
        type="textarea"
        scale="y"
        label="Message"
        size="sm"
      />

      <i>* Required</i>

      <div class="buttons">
        <FButton
          size="sm"
          customClasses="submit-btn"
          label="Send"
          type="primary"
          outlined
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import FInput from "@/components/input/FInput.vue";
import FButton from "@/components/button/FButton.vue";
import axios from "axios";
import { onActivated, onMounted, ref } from "vue";
import type { Ref } from "vue";

/*
     Discord Webhook bot + embed settings
*/
const targetDiscordUser = `<@375823597668925441>`;
const baseWebhookUrl =
  "https://discord.com/api/webhooks/946061140037869648/8fQSMRGr25fI_Oa3aTpYPU0PflYspHqalm3lSmtaWppaMuSr1eG1DfeINyEcNDH5JQoK";
const webhookQueryParams = "?wait=true";
const webhookBotName = "FanoMessenger";
const embedColors = [15548997, 3066993, 3447003, 16776960, 2303786];
let currentColor = 0;

/*
      User Reactive Info
*/
const username: Ref<string | null> = ref(null);
const email: Ref<string | null> = ref(null);
const message: Ref<string | null> = ref(null);

/*
      Methods
*/
function submit() {
  sendDiscordNotification();
}

function sendDiscordNotification() {
  axios
    .post(`${baseWebhookUrl}${webhookQueryParams}`, {
      username: webhookBotName,
      content: targetDiscordUser,
      embeds: [
        {
          title: `From: ${username.value}`,
          description: `Email: ${email.value}`,
          color: embedColors[currentColor],
          fields: [
            {
              name: "Message",
              value: message.value,
              inline: false,
            },
          ],
        },
      ],
    })
    .then((res) => {
      // notify user (show snackbar)
      currentColor = (currentColor + 1) % embedColors.length;
    })
    .catch((err) => {
      // show error (show snackbar)
    });
}
</script>

<script lang="ts">
export default {
  name: "HomeViewContact",
};
</script>

<style lang="scss">
@import "@/assets/screens.scss";
@import "@/assets/variables.scss";

.contact {
  display: flex;
  flex-direction: column;

  .field,
  .submit-btn {
    margin: 15px 0;
    width: 80%;
  }

  i {
    font-size: small;
  }

  .buttons {
    width: 80%;
    display: flex;
    justify-content: flex-end;
  }

  .field:first-child {
    margin: 0;
  }

  h1 {
    margin-bottom: 50px;
  }
}

@media screen and (max-width: $bp_tablet) {
  .contact {
    margin-top: 50px;

    .field,
    .submit-btn,
    .buttons {
      width: 100%;
    }
  }
}
</style>
