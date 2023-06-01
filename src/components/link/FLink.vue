<template>
  <RouterLink :to="to" :class="linkClasses">
    <slot>
      <i class="empty">Link</i>
    </slot>
  </RouterLink>
</template>

<script setup>
import { computed } from "@vue/reactivity"
import { storeToRefs } from "pinia"
import { useThemeStore } from "@/stores/theme.ts"

const { isDark } = storeToRefs(useThemeStore())

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  to: {
    type: String,
    required: true,
    default: "/",
  },
  size: {
    type: String,
    default: "md",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  borderless: {
    type: Boolean,
    default: true,
  },
})

const linkClasses = computed(() => {
  return [
    "flink",
    props.type,
    props.size,
    {
      rounded: props.rounded,
      borderless: props.borderless,
      dark: isDark.value,
    },
  ]
})
</script>

<style scoped lang="scss">
@import "@assets/variables.scss";
.flink {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;

  font-weight: 500;
  font-size: 15px;
  padding: 0px 10px;
  cursor: pointer;
  user-select: none;

  transition: color $element-trans-time;
  color: $black-mute;
  text-decoration: none;

  &.router-link-active {
    color: black;
    text-decoration: underline 1px solid #000000;
    text-underline-offset: 4px;
    font-weight: 500;
  }
  // ____> SIZES <sm, md, lg>
  &.sm {
    // min-width: 68px;
    // height: 38px;

    padding: 0px 2px;
    font-size: 14px;
    font-weight: 500;
  }
  &.md {
    // min-width: 100px;
    // height: 48px;

    padding: 0px 3px;
    font-size: 15px;
  }

  &.lg {
    // min-width: 120px;
    // height: 58px;

    padding: 0px 5px;
    font-size: 17px;
  }

  &.rounded {
    border-radius: $global-border-radius;
  }

  &.primary {
    &:hover {
      color: $primary;
    }
  }

  &.secondary {
    &:hover {
      color: $black;
    }
  }
}

.flink.dark {
  color: $white-mute;

  &.router-link-active {
    color: white;

    background: transparent;
    text-shadow: 
    0px 0px 5px black,
    -2px -2px 20px $link-active-shadow,
    10px 5px 30px $link-active-shadow, 
    -5px -10px 40px $link-active-shadow;

    text-decoration: none;
  }
  &.primary {
    &:hover {
      color: $primary;
    }
  }

  &.secondary {
    &:hover {
      color: $white;
    }
  }
}
</style>
