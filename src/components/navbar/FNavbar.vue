<template>
  <section :class="navbarClasses">
    <FButton
      size="sm"
      label=">"
      type="secondary"
      rounded
      outlined
      @click.prevent="openSideBar"
    />

    <div class="nav-item links">
      <FLink type="primary" to="/"> Home </FLink>

      <FLink type="secondary" to="/quiz"> Quiz </FLink>
    </div>

    <FButton
      size="sm"
      label="Theme"
      type="secondary"
      @click.prevent="changeTheme"
      rounded
    />
  </section>
</template>

<script setup lang="ts">
import FLink from "../link/FLink.vue";
import FButton from "../button/FButton.vue";
import { useThemeStore } from "@/stores/theme.ts";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const themeStore = useThemeStore();
const { changeTheme } = themeStore;
const { isDark } = storeToRefs(themeStore); // same thing as the above line

// Props
const props = defineProps({
  filled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["toggleSidebar"]);

function openSideBar() {
  emits("toggleSidebar");
}

const navbarClasses = computed(() => {
  return [
    "navbar",
    { filled: props.filled, rounded: props.rounded, dark: isDark.value },
  ];
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.navbar {
  z-index: $z-top;
  position: sticky;
  top: 0;
  margin: 0;
  padding: $global-padding;
  min-width: 300px;

  display: flex;
  justify-content: space-between;
  height: $nav-height;

  &.filled {
    background-color: $panel-bg-color-light;
    border: none;
  }

  &:not(.filled) {
    background-color: $color-background;
    border-bottom: 1px solid $white-soft;
  }

  &.rounded {
    border-radius: $global-border-radius;
  }

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;

    .links {
      margin: $global-aesthetic-margin;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid transparent;
      transition: background-color $element-trans-time ease-in;
      height: $nav-height;
      min-width: $nav-item-width;
      &.router-link-active {
        border-bottom: 1px solid $black;
        background-color: $secondary-light;
        color: $black;
      }
    }
  }
}

.dark.navbar {
  a {
    &.router-link-active {
      border-bottom: 1px solid $primary;
      background-color: $secondary-dark;
      color: $primary;
    }
  }
  &.filled {
    background-color: $panel-bg-color-dark;
    border: none;
  }

  &:not(.filled) {
    background-color: $color-background-dark;
    border-bottom: 1px solid $black-soft;
  }
}
</style>
