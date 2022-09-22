<template>
  <label
    ref="label"
    @click="focus"
    @keydown.prevent.enter="$refs.label.click()"
    :disabled="isDisabled"
    class="radio-control"
    :class="controlClasses"
  >
    <input
      ref="input"
      type="radio"
      v-bind="attrs"
      :class="inputClasses"
      v-model="computedValue"
      :value="nativeValue"
      :name="name"
    />
    <slot />
  </label>
</template>

<script setup>
// Imports
import { storeToRefs } from "pinia";
import { ref, computed, watch, useAttrs } from "vue";
import { useThemeStore } from "@/stores/theme.ts";

// State

// Reactive State
const newValue = ref(props.modelValue);
const input = ref(null);
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
const attrs = useAttrs();

// Props
const props = defineProps({
  modelValue: [String, Number, Boolean, Function, Object, Array],
  nativeValue: [String, Number, Boolean, Function, Object, Array],
  name: {
    type: [String, Number],
    required: true,
  },
  size: {
    type: String,
    default: "md",
  },
  type: {
    type: String,
    default: "radio",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

// Emits
const emits = defineEmits(["update:modelValue"]);

// Methods
function focus() {
  input.value.focus();
}

// Watch
watch(
  () => props.modelValue,
  (val) => {
    newValue.value = val;
  }
);

// Computed
const computedValue = computed({
  get() {
    return newValue.value;
  },
  set(value) {
    newValue.value = value;
    emits("update:modelValue", value);
  },
});

const controlClasses = computed(() => {
  return [
    "no-select",
    {
      rounded: props.rounded,
      disabled: isDisabled.value,
      required: props.required,
      dark: isDark.value,
    },
  ];
});
const inputClasses = computed(() => {
  return [
    {
      disabled: isDisabled.value,
    },
  ];
});

const isDisabled = computed(() => {
  return (
    attrs.disabled !== undefined &&
    attrs.disabled !== false &&
    attrs.disabled !== "false"
  );
});
</script>

<!-- inheritAttrs: false -->
<script>
export default {
  inheritAttrs: false,
};
</script>

<style scoped lang="scss">
@import "@assets/variables.scss";
.radio-control {
  &:hover:not(.checked) {
    background-color: $white-soft;
  }
  cursor: pointer;

  padding: (1.5 * $global-padding) ($global-padding + 4px);
  font-size: 14px;
  margin: 1px;
  line-height: 1.3;

  display: flex;

  &.rounded {
    border-radius: $global-border-radius;
  }

  &.checked {
    background-color: black;
  }

  input {
    display: inline-flex;
    cursor: pointer;
    margin-right: $global-aesthetic-margin;
    margin-top: 3px;
  }

  input[type="radio"]::after {
    content: "";
    width: 15px;
    height: 13px;
    margin-top: 1px;
    border-radius: 0px;
    transform: rotateZ(45deg) scale(0.9);

    background-color: transparent;
    outline: 1px solid $black-mute;
    border: 3px solid $color-background;
  }

  input[type="radio"]:checked::after {
    outline: 1px solid $black-soft2;
    border: 3px solid $white;
    background-color: $black-soft2;
  }
}

.dark.radio-control {
  &:hover:not(.checked) {
    background-color: $black-soft2;
    color: $white-soft2;
  }

  input[type="radio"]::after {
    outline: 1px solid $white-mute;
    border: 3px solid $container-bg-color-dark;
    background-color: $secondary-dark;
  }

  input[type="radio"]:checked::after {
    outline: 1px solid $white;
    border: 3px solid $black;
    background-color: $white-soft2;
    box-shadow: 0px 0px 12px $white;
  }
}
</style>
