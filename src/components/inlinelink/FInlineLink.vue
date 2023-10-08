<template>
  <RouterLink v-if="to" :to="to" class="inline-link" :class="linkClasses">
    <slot> </slot>
  </RouterLink>

  <a
    class="inline-link"
    :class="linkClasses"
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme"
import { storeToRefs } from "pinia"
import { computed } from "vue"
const themeStore = useThemeStore()
const { isDark } = storeToRefs(themeStore)

const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    underlined?: boolean
  }>(),
  {
    underlined: true,
  }
)

const linkClasses = computed(() => {
  return [
    {
      dark: isDark.value,
      underlined: props.underlined,
    },
  ]
})
</script>

<style scoped lang="scss">
@import "@assets/variables.scss";

.inline-link {
  transition: border $element-trans-time ease;
  display: inline;
  cursor: pointer;

  text-decoration: none;
  color: $black;
  font-weight: 400;

  &.underlined {
    border-bottom: 1px solid rgb(200, 200, 200);
    &:hover {
      border-bottom: 1px solid $black;
    }
  }
}

.inline-link.dark {
  color: $white;
  font-weight: 400;

  &.underlined {
    border-bottom: 1px solid rgb(70, 70, 70);
    &:hover {
      border-bottom: 1px solid $white;
    }
  }
}
</style>
