<template>
  <button
    v-bind="$attrs"
    class="no-select"
    :class="[
      type,
      size,
      {
        rounded: rounded,
        outlined: outlined,
        transparent: transparent,
        caps: caps,
        expanded: expanded,
        dark: isDark,
        disabled: isDisabled,
      },
    ]"
  >
    <span v-if="label">{{ label }} </span>
    <span v-else><slot></slot></span>
  </button>
</template>

<script setup>
// Imports
import { storeToRefs } from "pinia"
import { computed, useAttrs } from "vue"
import { useThemeStore } from "@/stores/theme"

// State

// #region Reactive State
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
const attrs = useAttrs()
// #endregion

// Props
const props = defineProps({
  // ! Code inside the defineProps() argument cannot access other variables declared in <script setup>, because the entire expression is moved to an outer function scope when compiled.

  label: String,
  size: {
    type: String,
    default: "md",
  },
  type: {
    type: String, // 'primary' | 'secondary' | 'danger' | 'important'
    default: "primary", 
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  caps: {
    type: Boolean,
    default: false,
  },
  expanded: {
    type: Boolean,
    default: false,
  },
})

// #region Computed
const isDisabled = computed(() => {
  return (
    attrs.disabled !== undefined &&
    attrs.disabled !== false &&
    attrs.disabled !== "false"
  )
})
// #endregion
</script>

<!-- inheritAttrs: false -->
<script>
export default {
  inheritAttrs: false,
}
</script>

<style scoped lang="scss">
@import "@assets/variables.scss";

// base button styling: width, height (for sm, md, lg)
button {
  transition: filter $element-trans-time, background-color $element-trans-time;
  display: flex;
  align-items: center;
  justify-content: center;

  border: $global-border-size solid transparent;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  &:hover:not(.dark, .disabled) {
    filter: brightness(0.9) contrast(1.1);
  }
  &:hover.dark:not(.disabled) {
    filter: brightness(1.2);
  }

  // fallback bg color (primary)
  background: $primary;

  // fallback size (md)
  min-width: 100px;
  height: 44px;

  padding: 0px 16px;
  font-size: 14px;
}

// ____> TYPES <primary, secondary (dark/light), danger>
.primary {
  background-color: $primary-2;
  font-weight: 500;
  &:not(.dark, .disabled) {
    box-shadow: 2px 2px 6px -2px rgba(0, 0, 0, 0.35);
  }

  &.primary:not(.dark, .outlined) {
    color: $color-background;
  }
}

.danger {
  background: $danger;
  color: $white;
}

.secondary {
  background: $secondary-light;
  color: $secondary-dark;
}

.important {
  background: $important;
  color: $white;
}

// ____> SIZES <sm, md, lg>
.sm {
  min-width: 68px;
  height: 38px;

  padding: 0px 12px;
  font-size: 13px;
  font-weight: 500;
}
.md {
  min-width: 100px;
  height: 48px;

  padding: 0px 16px;
  font-size: 14px;
}

.lg {
  min-width: 120px;
  height: 58px;

  padding: 0px 22px;
  font-size: 16px;
}

.expanded {
  width: 100%;
}

// ____> STYLES:  caps, rounded, transparent, outlined <primary, secondary (dark/light), danger>
.rounded {
  border-radius: $global-border-radius;
}

.caps {
  text-transform: uppercase;

  &.sm {
    font-size: 12px;
  }

  &.md {
    font-size: 13px;
  }

  &.lg {
    font-size: 15px;
  }
}

.outlined.primary {
  background: transparent;
  border: $global-border-size solid $primary-2;
  color: $primary-2;
}

.outlined.danger {
  background: transparent;
  border: $global-border-size solid $danger;
  color: $danger;
}

.outlined.secondary {
  background: transparent;
  border: $global-border-size solid $secondary-dark;
  color: $secondary-dark;
}

.outlined.important {
  background: transparent;
  border: $global-border-size solid $important;
  color: $important;
}

.outlined:not(.disabled, .dark) {
  &:hover {
    background: $btn-hover-light-2;
    filter: none;
  }
}

.disabled {
  opacity: 0.3;
  cursor: default !important;

  &:hover {
    filter: none;
  }
}

.dark {
  button {
    &.primary {
      background-color: $primary;

      &.outlined {
        border: 1px solid $primary;
        background-color: $color-background-dark;
        color: $primary;
      }
      &:not(.disabled) {
        box-shadow: 0px 0px 10px -4px rgba(255, 255, 255, 0.4);
      }

      &:not(.outlined) {
        color: $black;
      }
    }

    &.secondary {
      &.dark {
        background: $secondary-dark;
        color: $secondary-light;
      }

      &.outlined {
        background: transparent;
        border: $global-border-size solid $secondary-light;
        color: $secondary-light;
      }
    }

    &.outlined {
      &:hover {
        background: $btn-hover-light-1;
        filter: none;
      }
    }
  }
}
</style>
