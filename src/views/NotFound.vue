<template>
  <section class="not-found no-select" :class="{ dark: isDark }">
    <h1>404</h1>
    <h1>not</h1>
    <h1>found<span class="dot">.</span></h1>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme";
const { isDark } = storeToRefs(useThemeStore());
</script>

<style lang="scss" scoped>
@import "@assets/variables.scss";
@import "@assets/screens.scss";

.not-found {
  // position: fixed;
  // top: 40%;
  // left: 50%;
  // transform: translate(-50%, -50%);

  margin-top: $nav-height - 20px;
  line-height: 0.8;

  h1 {
    font-size: 90px;
    letter-spacing: -5px;
    word-spacing: 5px;
    text-transform: uppercase;

    .dot {
      display: inline;
      font-size: 50px;
    }
  }

  h1:first-child {
    color: rgb(255, 64, 0);
  }

  h1:nth-child(2) {
    color: rgb(149, 149, 149);
  }

  &.dark {
    h1:nth-child(2) {
      color: rgb(90, 90, 90);
    }
  }
}

@media screen and (max-width: $bp_tablet) {
  .not-found {
    h1 {
      font-size: 66px;
    }
  }
}
</style>
