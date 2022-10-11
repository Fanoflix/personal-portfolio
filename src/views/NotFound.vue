<template>
  <section class="not-found no-select" :class="{ dark: isDark }">
    <FToolTip title="Home" placement="bottom">
      <FIconButton @click="$router.push('/')" icon="backicon" containerWidth="65px" containerHeight="100%"
        iconSize="28px" />
    </FToolTip>
    <div id="nf-content">
      <h1 class="nf-msg">404</h1>
      <h1 class="nf-msg">not</h1>
      <h1 class="nf-msg">found<span class="dot">.</span></h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import FToolTip from "@/components/tooltip/FToolTip.vue"
import FIconButton from "@/components/iconbutton_makeshift/FIconButton.vue"
import { storeToRefs } from "pinia"
import { useThemeStore } from "@/stores/theme"
const { isDark } = storeToRefs(useThemeStore())
</script>

<style lang="scss" scoped>
@import "@assets/variables.scss";
@import "@assets/screens.scss";

.not-found {
  margin-top: $nav-height - 20px;

  display: flex;
  justify-content: center;
  flex-flow: row nowrap;

  #nf-content {
    line-height: 0.8;
    padding: 0 0 0 20px;

    .nf-msg {
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
}

@media screen and (max-width: $bp_tablet) {
  .not-found {
    h1 {
      font-size: 66px;
    }
  }
}
</style>
