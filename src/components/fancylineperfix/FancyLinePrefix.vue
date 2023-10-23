<template>
  <div :class="[{ dark: isDark }]" class="no-select prefix-container">
    <span class="line-cli-icon-outer">~</span>
    <span class="line-cli-icon-inner">~</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "FancyLinePrefix",
}
</script>

<script lang="ts" setup>
import { useThemeStore } from "@/stores/theme"
import { storeToRefs } from "pinia"

const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)
</script>

<style lang="scss">
@import "@/assets/variables";
.prefix-container {
  display: inline-block;
  margin-right: -12px;
  font-weight: 100;
  color: $black;

  .line-cli-icon-outer {
    font-size: 25px;
    line-height: 0;
    transform: rotateX(10deg);
  }

  .line-cli-icon-inner {
    font-size: 25px;
    line-height: 0;
    left: -18px;
    top: 3px;
  }
}

.dark .prefix-container {
  color: $white;

  .line-cli-icon-outer {
    filter: drop-shadow(0px 0px 5px white)
      drop-shadow(0px 0px 3px rgb(150, 150, 150));
  }

  .line-cli-icon-inner {
    filter: drop-shadow(0px 0px 5px white)
      drop-shadow(0px 0px 3px rgb(150, 150, 150));
  }
}
</style>
