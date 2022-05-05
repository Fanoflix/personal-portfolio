<template>
  <div
    class="tooltip-wrapper"
    :class="{ dark: isDark }"
    @mouseover="showTooltip"
    @mouseleave="hideTooltip"
  >
    <slot></slot>

    <transition name="tooltipFade">
      <div class="tooltip" v-show="isActive">
        <p>{{ title }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const { isDark } = storeToRefs(useThemeStore());
const isActive = ref(false);
const props = defineProps<{
  title: string;
  placement?: string;
}>();

function showTooltip() {
  isActive.value = true;
}

function hideTooltip() {
  isActive.value = false;
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.tooltip-wrapper {
  position: relative;
  display: inline;
  height: inherit;
  width: inherit;

  .tooltip {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-70%, 100%);
    display: flex;

    line-height: 1.2;
    padding: $global-padding - 3px;

    background-color: rgb(206, 206, 206);
    color: rgb(0, 0, 0);
    border-radius: 4px;
    z-index: 1;

    font-size: 12px;
  }

  .tooltipFade-enter-active,
  .tooltipFade-leave-active {
    transition: all 0.2s ease;
  }

  .tooltipFade-enter-from,
  .tooltipFade-leave-to {
    opacity: 0;
  }
}

.tooltip-wrapper.dark {
  .tooltip {
    background-color: rgb(30, 30, 30);
  }
}
</style>
