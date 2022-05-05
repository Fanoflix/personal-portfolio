<template>
  <div
    class="tooltip-wrapper"
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
    top: 200%;
    left: 50%;

    display: flex;

    padding: $global-padding - 3px;

    // transform: translate(-50%, -50%);
    background-color: rgb(20, 20, 20);
    border: 1px solid rgb(69, 69, 69);
    z-index: 1;

    font-size: 12px;
  }

  .tooltipFade-enter-active,
  .tooltipFade-leave-active {
    // opacity: 1;
    // transform: translateX(5px);
    transition: opacity 0.2s ease;
  }

  .tooltipFade-enter-from,
  .tooltipFade-leave-to {
    opacity: 0;
  }
}
</style>
