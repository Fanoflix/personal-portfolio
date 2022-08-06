<template>
  <RouterLink
    v-if="to"
    :to="to"
    class="inline-link"
    :class="[{ dark: isDark }]"
  >
    <slot> </slot>
  </RouterLink>

  <a
    class="inline-link"
    :class="[{ dark: isDark }]"
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { storeToRefs } from "pinia";
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);

const props = defineProps<{
  to?: string;
  href?: string;
}>();
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.inline-link {
  transition: border $element-trans-time ease;
  display: inline;
  cursor: pointer;

  text-decoration: none;
  border-bottom: 1px solid rgb(150, 150, 150);
  color: $black;
  font-weight: 600;

  &:hover {
    border-bottom: 1px solid black;
  }
}

.inline-link.dark {
  color: $white;
  border-bottom: 1px solid rgb(70, 70, 70);
  font-weight: 500;

  &:hover {
    border-bottom: 1px solid rgb(210, 210, 210);
  }
}
</style>
