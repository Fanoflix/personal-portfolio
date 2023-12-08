<template>
  <div class="control" :class="[rootClasses, customClasses, { dark: isDark }]">
    <p class="input-label no-select">
      {{ label }} <span v-if="isRequired">*</span>
    </p>

    <input
      v-if="type !== 'textarea'"
      :type="validatedType"
      ref="input"
      class="input"
      :class="[inputClasses, passwordRevealIconClass]"
      v-bind="attrs"
      :placeholder="placeholder"
      :value="computedValue"
      @input="onInput"
      @change="onChange"
      @invalid="onInvalid"
    />
    <textarea
      v-else
      ref="textarea"
      class="textarea"
      :class="[inputClasses]"
      v-bind="attrs"
      :placeholder="placeholder"
      :value="computedValue"
      @input="onInput"
      @change="onChange"
    />

    <img
      v-if="revealable && type == 'password'"
      :src="revealIconSource"
      alt="reveal"
      class="reveal-icon selectable"
      @click="onIconClick"
    />

    <div class="subtext">
      <div class="message">
        <p class="validation" v-if="state == 'error'">
          {{ errorMessage }}
        </p>
        <p class="success" v-else-if="state == 'success'">
          {{ successMessage }}
        </p>
      </div>

      <p class="counter" v-if="hasMaxLength">
        {{ valueLength }} / {{ attrs.maxlength }}
      </p>
    </div>
  </div>
</template>

<script setup>
// Imports
import { useThemeStore } from "@/stores/theme.ts"
import config from "@/utils/config.ts"
import { storeToRefs } from "pinia"
import { computed, nextTick, ref, useAttrs, watch } from "vue"

// State

// Reactive State
const newValue = ref(props.modelValue)
const newType = ref(props.type)
const isPasswordVisible = ref(false)
const input = ref(null)
const textarea = ref(null)
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
const attrs = useAttrs()

// Emits
const emits = defineEmits(["update:modelValue"])

// Props
const props = defineProps({
  label: String,
  placeholder: String,
  errorMessage: String,
  successMessage: String,
  modelValue: [Number, String],
  size: {
    type: String,
    default: "md",
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  revealable: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  scale: {
    type: String,
    default: null, // "x", "y"
  },
  state: {
    type: String,
    default: "",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: String,
    default: "",
  },
  hasCounter: {
    type: Boolean,
    default: false,
  },
})

// ! <script setup> components are private by default. Which means, if we assign a ref to this component in the parent component, we will not be able to access anything from this component in the parent component. UNLESS we specify "defineExpose" macro.

// Exposed
defineExpose({
  input,
})

/*
 Methods
*/
const onInput = (event) => {
  if (!props.lazy) {
    updateValue(event.target.value)
  }
}

const onChange = (event) => {
  if (props.lazy) {
    updateValue(event.target.value)
  }
}

const onIconClick = () => {
  if (props.type === "password" && props.revealable) {
    togglePasswordVisibility()
  } // TODO: else call a passed method
}

const togglePasswordVisibility = async () => {
  isPasswordVisible.value = !isPasswordVisible.value
  validatedType.value = isPasswordVisible.value ? "text" : "password"
  await nextTick()
  input.value.focus() // refocus the input element after changing the type
}

const updateValue = (value) => {
  computedValue.value = value
}

/*
 Watchers
*/
watch(
  () => props.modelValue,
  (val) => {
    newValue.value = val
  }
)

/*
 Computed
*/
const computedValue = computed({
  get() {
    return newValue.value
  },
  set(value) {
    newValue.value = value
    emits("update:modelValue", value)
  },
})

const validatedType = computed({
  get() {
    if (config.allowedInputTypes.includes(newType.value)) {
      return newType.value
    } else return "text"
  },
  set(val) {
    newType.value = val
  },
})

const rootClasses = computed(() => {
  return [
    props.size,
    {
      disabled: isDisabled.value,
    },
  ]
})

const inputClasses = computed(() => {
  return [
    props.size,
    props.state,
    {
      "scale-x": validatedType.value === "textarea" && props.scale === "x",
      "scale-y": validatedType.value === "textarea" && props.scale === "y",
      rounded: props.rounded,
      bordered: props.bordered,
      dark: isDark.value,
    },
  ]
})

const passwordRevealIconClass = computed(() => {
  return isPasswordVisible.value &&
    props.revealable &&
    props.type === "password"
    ? "secret-open"
    : "secret-close"
})

const isDisabled = computed(() => {
  return (
    attrs.disabled !== undefined &&
    attrs.disabled !== false &&
    attrs.disabled !== "false"
  )
})

const isRequired = computed(() => {
  return (
    attrs.required !== undefined &&
    attrs.required !== false &&
    attrs.disabled !== "false"
  )
})

const hasMaxLength = computed(() => {
  return (
    attrs.maxlength !== undefined &&
    attrs.maxlength > -1 &&
    props.hasCounter &&
    props.type !== "number"
  )
})

const revealIconSource = computed(() => {
  return isPasswordVisible.value
    ? new URL("../../assets/icons/secret-open.svg", import.meta.url)
    : new URL("../../assets/icons/secret-close.svg", import.meta.url)
})

const valueLength = computed(() => {
  if (typeof computedValue.value == "number") {
    return computedValue.value.toString().length
  } else if (typeof computedValue.value == "string") {
    return computedValue.value.length
  } else {
    return 0
  }
})
</script>

<!-- inheritAttrs = false -->
<script>
export default {
  inheritAttrs: false,
}
</script>

<style scoped lang="scss">
@import "@assets/variables.scss";

.control {
  // base control styling
  transition: color $element-trans-time, background-color $element-trans-time;
  // display: flex;
  flex-flow: nowrap column;
  // align-items: center;
  justify-content: center;
  // width: 100%;

  font-weight: 300;

  // base label styling
  .input-label {
    display: block;
    align-self: flex-start;
    // text-transform: capitalize;

    line-height: 1.1;
    margin-bottom: 4px;
    margin-left: 2px;
    font-weight: 500;
    font-size: 14px;
    color: $label-light;
  }

  span {
    font-style: italic;
  }

  // common styling for both
  .input,
  .textarea {
    outline: none;
    background-color: $white-soft;
    border: $global-border-size solid transparent;
    color: $black;

    padding: 6px 10px;

    height: 44px;
    width: 100%;

    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
    transition: color $element-trans-time, background-color $element-trans-time,
      box-shadow 0.2s ease;

    &.scale-x {
      resize: horizontal;
    }

    &.scale-y {
      resize: vertical;
    }

    &:focus {
      border: 1px solid rgb(110, 110, 110);
    }

    // bordered, success, error
    &.bordered {
      border-color: $color-border-light-1;
    }

    &.error {
      border-color: $error;
      box-shadow: $input-error-shadow;
    }

    &.success {
      border-color: $success-light;
      box-shadow: $input-success-shadow-light;
    }

    // rounded
    &.rounded.sm {
      border-radius: $global-border-radius - 2px;
    }
    &.rounded.md {
      border-radius: $global-border-radius - 1px;
    }
    &.rounded.lg {
      border-radius: $global-border-radius;
    }
  }

  .input {
    &.sm {
      height: 34px;
      font-size: 14px;
      font-weight: 400;
    }

    &.md {
      height: 44px;
      font-size: 15px;
    }

    &.lg {
      height: 58px;
      font-size: 24px;
      font-weight: 200;
    }
  }

  .textarea {
    // size: sm, md, lg
    &.sm {
      min-height: 56px;
      font-size: 14px;
    }

    &.md {
      min-height: 74px;
      font-size: 15px;
    }

    &.lg {
      min-height: 98px;
      font-size: 18px;
      font-weight: 300;
    }
  }

  .subtext {
    // base validation message styling
    display: flex;
    align-self: flex-start;
    width: 100%;

    font-weight: 400;
    font-size: 12px;

    .message {
      width: 90%;
      text-align: left;
      .validation {
        color: $error;
      }
      // ! Error: When focusing an input field with state="error", the font-weight of the .validation message lowers 1 degree.

      .success {
        color: $success-light;
      }
    }

    .counter {
      width: 10%;
      min-width: 40px;
      text-align: right;
      color: $white-mute;
    }
  }

  &.disabled {
    opacity: 0.5;
    filter: grayscale(0.8) brightness(0.8);
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
}

/*
  DARKMODE
*/
.dark {
  .control {
    .input-label {
      color: $label-dark;
    }
    .input,
    .textarea {
      background-color: rgb(23, 23, 23);
      color: $white;

      &:focus {
        border: 1px solid rgba(255, 255, 255, 0.5);
      }

      &.bordered {
        border-color: $color-border-dark-1;
      }

      &.error {
        border-color: $error;
      }

      &.success {
        border-color: $input-success-border-dark;
        box-shadow: $input-success-shadow-dark;
      }
    }

    .subtext {
      .message {
        .success {
          color: $success-dark;
        }
      }

      .counter {
        color: $black-mute;
      }
    }
  }
}
</style>
