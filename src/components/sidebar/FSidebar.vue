<template>
  <section ref="sidebar" class="side-bar" :class="sidebarClasses">
    <FLink size="md" type="secondary" to="/"> Home </FLink>

    <FLink size="md" type="secondary" to="/contact"> Contact </FLink>
  </section>
</template>

<script setup>
// Imports
import FLink from "../link/FLink.vue";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useThemeStore } from "@/stores/theme.ts";

// State

// Reactive State
const { isDark } = storeToRefs(useThemeStore());
const sidebar = ref(null);

// Props
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  filled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
});

// Exposed
defineExpose({
  sidebar,
});

const sidebarClasses = computed(() => {
  return [
    {
      visible: props.isVisible,
      filled: props.filled,
      rounded: props.rounded,
      dark: isDark.value,
    },
  ];
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.side-bar {
  z-index: $z-top;
  display: flex;
  flex-flow: wrap column;
  text-align: left;

  padding-right: 80px;
  padding-top: 76px;

  a {
    margin-bottom: 20px;
    transition: text-shadow $text-and-bg-trans-time ease-in;

    &.router-link-active {
      color: black;
      text-decoration: underline #9b9b9b solid 1px;
    }
  }
  &.visible {
    -webkit-transform: none;
    transform: none;
  }

  &.filled {
    background-color: $panel-bg-color-light;
    border: none;
  }

  &:not(.filled) {
    background-color: transparent;
  }

  &.rounded {
    border-radius: $global-border-radius;
  }
}

.dark.side-bar {
  a {
    &.router-link-active {
      color: white;
      text-shadow: 10px 0px 20px rgb(219, 219, 219),
        -10px 0px 20px rgba(255, 255, 255, 0.6);
      text-decoration: none;
    }
  }
  &.filled {
    background-color: $panel-bg-color-dark;
    border: none;
  }

  &:not(.filled) {
    background-color: transparent;
  }
}
</style>
