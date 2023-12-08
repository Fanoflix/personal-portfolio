<template>
  <section class="side-bar" :class="sidebarClasses">
    <FLink class="sidebar-item" size="md" type="secondary" to="/about">
      About
    </FLink>

    <FLink class="sidebar-item" size="md" type="secondary" to="/contact">
      Contact
    </FLink>
  </section>
</template>

<script setup>
// Imports
import { useThemeStore } from "@/stores/theme.ts"
import { storeToRefs } from "pinia"
import { computed, ref } from "vue"
import FLink from "../link/FLink.vue"

// State

// Reactive State
const { isDark } = storeToRefs(useThemeStore())
const aboutLinkRef = ref(null)

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
})

// Exposed
defineExpose({
  aboutLinkRef,
})

const sidebarClasses = computed(() => {
  return [
    {
      visible: props.isVisible,
      filled: props.filled,
      rounded: props.rounded,
      dark: isDark.value,
    },
  ]
})
</script>

<style scoped lang="scss">
@import "@assets/variables.scss";
@import "@assets/screens.scss";

.side-bar {
  z-index: $z-top;
  display: flex;
  flex-flow: wrap column;
  text-align: left;

  padding-right: 50px;
  padding-top: 96px;

  // width: 25%;

  a {
    margin-bottom: 20px;
    transition: text-shadow $text-and-bg-trans-time ease-in;
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
  &.filled {
    background-color: $panel-bg-color-dark;
    border: none;
  }

  &:not(.filled) {
    background-color: transparent;
  }
}

@media screen and (max-width: $bp_tablet) {
  .side-bar {
    padding: 0;
    flex-flow: wrap row;
    align-items: center;
    justify-content: center;

    .sidebar-item {
      margin: 20px 7px;
    }
  }
}
</style>
