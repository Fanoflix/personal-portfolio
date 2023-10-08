<template>
  <span
    class="tooltip-wrapper"
    :class="wrapperClasses"
    @mouseover="showTooltip"
    @mouseleave="hideTooltip"
    v-bind="$attrs"
  >
    <slot></slot>

    <transition name="tooltipFade">
      <div class="tooltip" :class="tooltipClasses" v-if="isActive">
        <div class="arrow"></div>
        <p class="tooltip-title">{{ title }}</p>
      </div>
    </transition>
  </span>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme"
import { storeToRefs } from "pinia"
import { computed, ref, useAttrs } from "vue"

const { isDark } = storeToRefs(useThemeStore())
const isActive = ref(false)
const attrs = useAttrs()
const props = defineProps<{
  title: string
  placement?: string
}>()

function showTooltip() {
  isActive.value = true
}

function hideTooltip() {
  isActive.value = false
}

const wrapperClasses = computed(() => {
  return { dark: isDark.value }
})

const tooltipClasses = computed(() => {
  return [
    {
      top: props.placement === "top",
      bottom: props.placement === "bottom",
    },
  ]
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<style lang="scss" scoped>
@import "@assets/variables.scss";

.tooltip-wrapper {
  position: relative;
  display: inline;
  height: inherit;
  .tooltip {
    position: absolute;
    display: block;
    left: 50%;

    max-width: 200px;

    display: flex;

    line-height: 1.2;
    padding: $global-padding $global-padding + 3px;

    z-index: 200;

    background-color: $white-soft;
    border-top: 1px solid transparent;

    .tooltip-title {
      width: max-content;
      font-size: 13px;
      color: $black-soft2;
      font-weight: 600;
    }
    .arrow {
      position: absolute;
      left: 50%;
      height: 10px;
      width: 10px;
      background-color: $white-soft;
      border: 1px solid transparent;
    }

    &.top {
      top: 0;
      transform: translate(-50%, -150%);

      .arrow {
        top: 100%;
        transform: translate(-50%, -50%) rotate(-135deg);
      }
    }

    &.bottom {
      top: 100%;
      transform: translate(-50%, 50%);

      .arrow {
        top: 0%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }

  .tooltipFade-enter-active,
  .tooltipFade-leave-active {
    transition: opacity 0.25s ease-in-out, transform 0.2s ease-in;
  }

  .tooltipFade-enter-from {
    opacity: 0;
  }
  .tooltipFade-leave-to {
    transition: none;
    opacity: 0;
  }
}

.tooltip-wrapper.dark {
  .tooltip {
    background-color: $black;
    .arrow {
      background-color: $black;
    }

    &.bottom {
      border-top: 1px solid $white;
      box-shadow: -8px -10px 10px -13px $white, 8px -9px 10px -13px $white,
        0px -23px 40px -10px $white;

      .arrow {
        border-top: 1px solid $white;
        border-left: 1px solid $white;
      }
    }

    &.top {
      border-bottom: 1px solid $white;
      box-shadow: 8px 10px 10px -13px $white, -8px 9px 10px -13px $white,
        0px 23px 40px -10px $white;

      .arrow {
        border-top: 1px solid $white;
        border-left: 1px solid $white;
      }
    }
    p {
      color: $white-soft2;
      font-weight: 500;
    }
  }
}
</style>
