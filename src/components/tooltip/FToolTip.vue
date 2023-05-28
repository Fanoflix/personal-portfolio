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
      <div class="tooltip" :class="tooltipClasses" v-show="isActive">
        <div class="arrow"></div>
        <p>{{ title }}</p>
      </div>
    </transition>
  </span>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme"
import { storeToRefs } from "pinia"
import { ref, useAttrs, computed } from "vue"

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
  display: block;
  height: inherit;
  // width: inherit;
  .tooltip {
    position: absolute;
    display: block;
    top: 0%;
    left: 50%;

    display: flex;

    line-height: 1;
    padding: $global-padding;

    z-index: 200;

    background-color: $white-soft;
    border-top: 1px solid transparent;

    .arrow {
      position: absolute;
      left: 50%;
      height: 10px;
      width: 10px;
      background-color: $white-soft;
      border: 1px solid transparent;

      transform: translate(-50%, -50%) rotate(45deg);
    }

    &.top {
      /* TODO: top is broken */

      // top: 0%;
      // transform: translate(-50%, -150%);

      .arrow {
        top: 100%;
      }
    }

    &.bottom {
      top: 100%;
      // transform: translate(-50%, 0%);
      transform: translate(-50%, 50%);

      .arrow {
        top: 0%;
      }
    }

    p {
      font-size: 12px;
      color: $black-soft2;
      font-weight: 600;
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
    background-color: $background-black;
    border-top: 1px solid $white;

    box-shadow: -8px -12px 10px -13px $white, 8px -12px 10px -13px $white,
      0px -30px 40px -10px $white;

    .arrow {
      background-color: $background-black;
      border-top: 1px solid $white;
      border-left: 1px solid $white;
    }
    p {
      color: $white-soft2;
      font-weight: 500;
    }
  }
}
</style>
