<template>
  <div class="icon-btn-container" :class="{ dark: isDark }" :style="cssProps">
    <img class="icon" :src="iconSrc" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { storeToRefs } from "pinia"
import { useThemeStore } from "@/stores/theme"

const { isDark } = storeToRefs(useThemeStore())

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  containerWidth: {
    type: String,
    default: "45px",
  },
  containerHeight: {
    type: String,
    default: "45px",
  },
  iconSize: {
    type: String,
    default: "24px",
  },
})

const cssProps = computed<Record<string, string>>(() => {
  return {
    "--container-width": props.containerWidth,
    "--container-height": props.containerHeight,
    "--icon-size": props.iconSize,
  }
})
const iconSrc = computed(() => {
  return new URL(`../../assets/icons/${props.icon}.svg`, import.meta.url).href
})
</script>

<style lang="scss" scoped>
@import "@assets/variables.scss";
@import "@assets/screens.scss";

.icon-btn-container {
  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--container-width);
  height: var(--container-height);
  border-radius: $global-border-radius;
  transition: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: $white-soft;
  }
  .icon {
    height: var(--icon-size);
    width: var(--icon-size);
    filter: brightness(0);
  }
}

.dark.icon-btn-container {
  filter: invert(1);
}

@media screen and (max-width: $bp_tablet) {
  .icon-btn-container {
    height: 100%;
    width: 40px;

    .icon {
      height: 20px;
      width: 20px;
    }
  }
}
</style>
