<template>
  <router-link :to="to" :class="linkClasses">
    <slot>
      <i class="empty">Link</i>
    </slot>
  </router-link>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme.ts";

const { isDark } = storeToRefs(useThemeStore());

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  to: {
    type: String,
    required: true,
    default: "",
  },
});

const linkClasses = computed(() => {
  return [
    "flink",
    props.type,
    {
      dark: isDark.value,
    },
  ];
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.flink {
  font-weight: 500;
  font-size: 14px;
  padding: 0px 10px;
  cursor: pointer;
  transition: color $element-trans-time;
  color: $black-mute;
  text-decoration: none;

  &.primary {
    &:hover {
      color: $primary;
    }
  }

  &.secondary {
    &:hover {
      color: $black;
    }
  }
}

.flink.dark {
  color: $white-mute;
  &.primary {
    &:hover {
      color: $primary;
    }
  }

  &.secondary {
    &:hover {
      color: $white;
    }
  }
}
</style>
