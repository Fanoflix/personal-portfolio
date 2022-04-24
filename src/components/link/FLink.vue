<template>
  <router-link :to="to" :class="linkClasses">
    <slot>
      <i class="empty">Link</i>
    </slot>
  </router-link>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme.ts";

const { isDark } = storeToRefs(useThemeStore());

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  to: {
    type: String,
    required: true,
    default: "",
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
});

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
  ];
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.flink {
  font-weight: 500;
  font-size: 14px;
  padding: 0px 10px;
  cursor: pointer;
  transition: color $element-trans-time;
  color: $black-mute;
  text-decoration: none;

  // ____> SIZES <sm, md, lg>
  &.sm {
    min-width: 68px;
    height: 38px;

    padding: 0px 12px;
    font-size: 13px;
    font-weight: 500;
  }
  &.md {
    min-width: 100px;
    height: 48px;

    padding: 0px 16px;
    font-size: 14px;
  }

  &.lg {
    min-width: 120px;
    height: 58px;

    padding: 0px 22px;
    font-size: 16px;
  }

  &.rounded:not(.borderless) {
    border-radius: $global-border-radius;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  &.rounded.borderless {
    border-radius: $global-border-radius;
  }

  &.borderless {
    border: 0px !important;
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
