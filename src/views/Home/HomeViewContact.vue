<template>
  <div class="contact">
    <h1>Leave a message</h1>
    <form name="contact-form" @submit.prevent="submit">
      <FInput
        name="username"
        v-model="username"
        customClasses="field"
        label="Name"
        required
        size="sm"
        ref="firstInput"
      />

      <FInput
        name="email"
        v-model="email"
        required
        customClasses="field"
        label="Email"
        size="sm"
      />

      <FInput
        name="message"
        v-model="message"
        customClasses="field"
        required
        type="textarea"
        scale="y"
        label="Message"
        size="sm"
      />

      <i>* Required. </i>

      <i>
        Use

        <KeybindGraphic
          v-if="!isDark"
          keybindText="Ctrl / command + enter"
          :bordered="true"
          border-radius="3px"
          uppercase
          backgroundColor="rgb(235,235,235)"
          borderColor="rgb(130,130,130)"
          elevationColor="rgb(130,130,130)"
          fontColor="rgb(20,20,20)"
          elevation="3px"
          fontSize="11px"
          padding="5px"
          :fontWeight="500"
        />
        <KeybindGraphic
          v-else
          keybindText="Ctrl / command + enter"
          :bordered="true"
          border-radius="3px"
          uppercase
          borderColor="rgb(55,55,55)"
          elevationColor="rgb(70,70,70)"
          backgroundColor="rgb(15,15,15)"
          elevation="3px"
          fontSize="11px"
          padding="5px"
          :fontWeight="500"
        />
        to send.
      </i>

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
          :disabled="isSubmitDisabled"
          size="sm"
          customClasses="submit-btn"
          :label="sendBtnLabel"
          type="primary"
          ref="submitBtn"
          outlined
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import FButton from "@/components/button/FButton.vue"
import FInput from "@/components/input/FInput.vue"
import KeybindGraphic from "@/components/keybindgraphic/KeybindGraphic.vue"
import { useThemeStore } from "@/stores/theme"
import axios, { type AxiosResponse } from "axios"
import { storeToRefs } from "pinia"
import type { Ref } from "vue"
import { computed, onActivated, onDeactivated, ref } from "vue"

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
/*
      User Reactive Info
*/
const username: Ref<string | null> = ref(null)
const email: Ref<string | null> = ref(null)
const message: Ref<string | number | undefined> = ref(undefined)
const isMessageSendSuccessful: Ref<boolean> = ref(false)
const responseMessage: Ref<string | undefined> = ref(undefined)
const firstInput = ref<InstanceType<typeof FInput> | null>(null)
const submitBtn = ref(null)
const isSubmitDisabled = ref(false)

/**
 * @Lifecycle
 */

onActivated(() => {
  document.body.addEventListener("keydown", submitFormOnCtrlEnter)
  const firstInputElement = firstInput.value
    ?.input as unknown as HTMLInputElement
  firstInputElement.focus()
})

onDeactivated(() => {
  document.body.removeEventListener("keydown", submitFormOnCtrlEnter)
})

/*
     Discord Webhook bot + embed settings
*/
const targetDiscordUser = `<@375823597668925441>`
const baseWebhookUrl =
  "https://discord.com/api/webhooks/1108824423315816539/WFTPvaKIoIY9Hp00DHJMNpQ5uZH3gdnw8vVpDKhhAUnLG2J5INUUwRuZss_-LMBvjw3m"
const webhookQueryParams = "?wait=true"
const googleAppsScriptUrl =
  "https://script.google.com/macros/s/AKfycbyWZ9TWzSUTAScQceeSjJ_V9RMsvnvAKtdCPzmyZZZahjvp_KYiXKCpqqG5YznWaZy4/exec"
const webhookBotName = "WebsiteMessenger"
const embedColors = [15548997, 3066993, 3447003, 16776960, 2303786]
let currentColor = 0

/*
      Methods
*/
function resetInputs() {
  username.value = ""
  email.value = ""
  message.value = ""
}

function submitFormOnCtrlEnter(e: KeyboardEvent) {
  if (isSubmitDisabled.value) return
  if (!(e.key === "Enter" && (e.metaKey || e.ctrlKey))) return

  const form = (e.target as HTMLFormElement).form
  if (form) form.requestSubmit()
}

async function submit(e) {
  isSubmitDisabled.value = true

  responseMessage.value = undefined
  sendToGoogleSheets()
}

async function sendToGoogleSheets() {
  const form = document.forms["contact-form"]
  const formData = new FormData(form)

  fetch(googleAppsScriptUrl, {
    redirect: "follow",
    method: "POST",
    body: formData,
  })
    .then((res) => {
      sendDiscordNotification()
    })
    .catch((err: any) => {
      responseMessage.value = "Failed"
      isMessageSendSuccessful.value = false
    })
}

function sendDiscordNotification() {
  axios
    .post(`${baseWebhookUrl}${webhookQueryParams}`, {
      username: webhookBotName,
      content: `.\n.\n.${targetDiscordUser}\n.\n.`,
      embeds: [
        {
          title: `You have a new message!`,
          color: embedColors[currentColor],
        },
      ],
    })
    .then((res: AxiosResponse<any, any>) => {
      currentColor = (currentColor + 1) % embedColors.length
      responseMessage.value = "Sent"
      isSubmitDisabled.value = false
      isMessageSendSuccessful.value = true
      resetInputs()
    })
    .catch((err: any) => {
      responseMessage.value = "Failed"
      isSubmitDisabled.value = false
      isMessageSendSuccessful.value = false
    })
}

/**
 * @computed
 */

const sendBtnLabel = computed(() => {
  return isSubmitDisabled.value ? "Sending..." : "Send"
})
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
    margin-top: 20px;
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
