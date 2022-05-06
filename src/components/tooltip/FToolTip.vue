<template>
  <div
    class="tooltip-wrapper"
    :class="wrapperClasses"
    v-bind="$attrs"
    @mouseover="showTooltip"
    @mouseleave="hideTooltip"
  >
    <slot></slot>

    <transition name="tooltipFade">
      <div class="tooltip" :class="tooltipClasses" v-show="isActive">
        <div class="arrow"></div>
        <p>{{ title }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { storeToRefs } from "pinia";
import { ref, useAttrs, computed } from "vue";

const { isDark } = storeToRefs(useThemeStore());
const isActive = ref(false);
const attrs = useAttrs();
const props = defineProps<{
  title: string;
  placement?: string;
}>();

console.log(attrs.class);

function showTooltip() {
  isActive.value = true;
}

function hideTooltip() {
  isActive.value = false;
}

const wrapperClasses = computed(() => {
  return { dark: isDark.value };
});

const tooltipClasses = computed(() => {
  return [
    {
      top: props.placement === "top",
      bottom: props.placement === "bottom",
    },
  ];
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.tooltip-wrapper {
  position: relative;
  display: block;
  height: inherit;
  width: inherit;
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
    // background-color: transparent;
    // border: 1px solid $white-mute;
    // border-radius: 2px;

    .arrow {
      position: absolute;
      left: 50%;
      height: 10px;
      width: 10px;
      background-color: $white-soft;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &.top {
      transform: translate(-50%, -110%);

      .arrow {
        top: 100%;
      }
    }

    &.bottom {
      transform: translate(-50%, 150%);

      .arrow {
        top: 0%;
      }
    }

    p {
      font-size: 12px;
      color: $white-mute;
      font-weight: 600;
    }
  }

  .tooltipFade-enter-active,
  .tooltipFade-leave-active {
    transition: all 0.1s ease-in;
  }

  .tooltipFade-enter-from,
  .tooltipFade-leave-to {
    opacity: 0;
  }
}

.tooltip-wrapper.dark {
  .tooltip {
    background-color: $black-soft2;
    // background-color: transparent;
    // border: 1px solid $white-soft2;
    p {
      color: $white-soft2;
      font-weight: 500;
    }

    .arrow {
      background-color: $black-soft2;
    }
  }
}
</style>
