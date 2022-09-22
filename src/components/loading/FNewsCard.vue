<template>
  <section class="news-wrapper no-select" :class="{ dark: isDark }">
    <FToolTip title="Home" placement="bottom">
      <FIconButton
        @click="$router.push('/')"
        icon="backicon"
        containerWidth="65px"
        containerHeight="100%"
        iconSize="28px"
      />
    </FToolTip>
    <div class="news-content">
      <h1 class="message">
        {{ message }}
      </h1>

      <h3 v-if="hiddenMessage" class="secret-message">
        {{ hiddenMessage }}
      </h3>
    </div>
  </section>
</template>

<script setup lang="ts">
import FIconButton from "@/components/iconbutton_makeshift/FIconButton.vue"
import FToolTip from "@/components/tooltip/FToolTip.vue"
import { storeToRefs } from "pinia"
import { useThemeStore } from "@/stores/theme"
const { isDark } = storeToRefs(useThemeStore())

defineProps<{ message: string; hiddenMessage?: string }>()
</script>

<style lang="scss" scoped>
@import "@assets/variables.scss";
@import "@assets/screens.scss";

.news-wrapper {
  margin-top: $nav-height - 20px;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  .news-content {
    text-transform: uppercase;
    padding: 0 20px;
    width: 50vw;

    .message {
      letter-spacing: -2px;
      word-spacing: 7px;
      font-size: 55px;
      line-height: 0.95;

      // filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.3));
      text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3);
    }

    .secret-message {
      margin-top: 12px;
      color: $white-soft2;
      line-height: 1.05;
    }
  }
}

.news-wrapper.dark {
  .secret-message {
    color: $placeholder-text-dark;
  }
}

@media screen and (max-width: $bp_tablet) {
  .news-wrapper {
    .news-content {
      .message {
        word-spacing: 4px;
        font-size: 32px;
      }
    }
  }
}
</style>
