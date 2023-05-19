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
        @keyup.ctrl.enter="submit()"
      />

      <i>* Required</i>

      <div class="buttons">
        <Transition name="fade" mode="out-in">
          <div v-if="responseMessage">
            <p class="success response-message" v-if="isMessageSendSuccessful">
              {{ responseMessage }} &#10003;
            </p>
            <p class="error response-message" v-else>
              {{ responseMessage }} &#9587;
            </p>
          </div>
        </Transition>
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
import FInput from "@/components/input/FInput.vue"
import FButton from "@/components/button/FButton.vue"
import axios, { type AxiosResponse } from "axios"
import { ref } from "vue"
import type { Ref } from "vue"

/*
     Discord Webhook bot + embed settings
*/
const targetDiscordUser = `<@375823597668925441>`
const baseWebhookUrl =
  "https://discord.com/api/webhooks/1108824423315816539/WFTPvaKIoIY9Hp00DHJMNpQ5uZH3gdnw8vVpDKhhAUnLG2J5INUUwRuZss_-LMBvjw3m"
const webhookQueryParams = "?wait=true"
const webhookBotName = "WebsiteMessenger"
const embedColors = [15548997, 3066993, 3447003, 16776960, 2303786]
let currentColor = 0

/*
      User Reactive Info
*/
const username: Ref<string | null> = ref(null)
const email: Ref<string | null> = ref(null)
const message: Ref<string | null> = ref(null)
const isMessageSendSuccessful: Ref<boolean> = ref(false)
const responseMessage: Ref<string | undefined> = ref(undefined)

/*
      Methods
*/
function submit() {
  sendDiscordNotification()
}

function sendDiscordNotification() {
  responseMessage.value = undefined

  axios
    .post(`${baseWebhookUrl}${webhookQueryParams}`, {
      username: webhookBotName,
      content: `.\n.\n.\n.${targetDiscordUser}, you have a new message from **"${username.value}"** (_${email.value}_) \n.`,
      embeds: [
        {
          title: `**${username.value}**`,
          description: `${message.value}`,
          color: embedColors[currentColor],
        },
      ],
    })
    .then((res: AxiosResponse<any, any>) => {
      responseMessage.value = "Sent"
      currentColor = (currentColor + 1) % embedColors.length
      isMessageSendSuccessful.value = true
    })
    .catch((err: any) => {
      responseMessage.value = "Failed"
      isMessageSendSuccessful.value = false
    })
}
</script>

<script lang="ts">
export default {
  name: "HomeViewContact",
}
</script>

<style lang="scss" scoped>
@import "@assets/screens.scss";
@import "@assets/variables.scss";

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
    align-items: center;

    .response-message {
      margin-right: 10px;
    }

    .success {
      color: $success-light;
    }

    .error {
      color: $error;
    }
  }

  .field:first-child {
    margin: 0;
  }

  h1 {
    margin-bottom: 39px;
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
