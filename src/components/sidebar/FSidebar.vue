<template>
  <section ref="sidebar" class="side-bar" :class="sidebarClasses">
    <FLink type="secondary" to="/buttonShowcase"> Buttons </FLink>

    <FLink type="secondary" to="/inputShowcase"> Inputs </FLink>
  </section>
</template>

<script setup>
/*
  TODO Make Sidebar retractable
*/

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
  position: fixed;
  top: $nav-height;
  left: 0;
  bottom: 0;
  padding: 10px $global-padding;

  transition: transform $element-trans-time;
  -webkit-transform: translateX(-115%);
  transform: translateX(-115%);

  min-width: $nav-width;
  max-width: $nav-width + 20px;

  display: flex;
  flex-flow: wrap column;

  &.visible {
    -webkit-transform: none;
    transform: none;
  }

  &.filled {
    background-color: $panel-bg-color-light;
    border: none;
  }

  &:not(.filled) {
    background-color: $color-background;
    border-right: 1px solid $white-soft;
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
    background-color: $color-background-dark;
    border-right: 1px solid $black-soft;
  }
}
</style>
