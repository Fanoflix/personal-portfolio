<template>
  <div id="news-wrapper" class="no-select" :class="{ dark: isDark }">
    <h1 id="message">
      {{ message }}
    </h1>

    <h3 id="secret-message">
      {{ hiddenMessage }}
    </h3>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme";
const { isDark } = storeToRefs(useThemeStore());

defineProps<{ message: string; hiddenMessage?: string }>();
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

#news-wrapper {
  position: fixed;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;

  transition: none;

  max-width: $center-content-width;

  #message {
    font-size: 46px;
  }

  #secret-message {
    color: $white-soft;
  }
}

#news-wrapper.dark {

  #secret-message {
    color: $black-soft;
  }
}
</style>
