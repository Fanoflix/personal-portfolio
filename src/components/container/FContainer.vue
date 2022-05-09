<template>
  <div :style="cssProps" :class="[containerClasses, customClasses]">
    <h2 class="heading" v-if="heading">
      {{ heading }}
    </h2>

    <slot>
      <p class="empty">
        {{ emptyText || "Empty" }}
      </p>
    </slot>
  </div>
</template>

<script setup>
// Imports
import { useThemeStore } from "@/stores/theme.ts";
import { storeToRefs } from "pinia";
import { computed } from "vue";

// State

// Reactive State
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);

// Props
const props = defineProps({
  heading: {
    type: String,
    default: null,
  },
  headingCenter: {
    type: Boolean,
    default: false,
  },
  emptyText: {
    type: String,
    default: null,
  },
  // indexText: {
  //   type: String,
  //   default: null,
  // },

  /* Structure */
  width: {
    type: String,
    default: "100%",
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: "auto",
  },
  row: {
    type: Boolean,
    default: false,
  },
  column: {
    type: Boolean,
    default: false,
  },
  // style
  transparent: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  customClasses: {
    type: String,
    default: "",
  },
  padding: {
    type: String,
    default: "default", // 1, 2, 3
  },
});

// Exposed

// Emits

// Methods

// Computed
const containerClasses = computed(() => {
  return [
    "f-container",
    {
      row: props.row,
      column: props.column,
      wrap: props.wrap,
      "heading-center": props.headingCenter,
      "p-default": props.padding == "default" || props.padding == "",
      "p-1": props.padding === "1" || props.padding === 1,
      "p-2": props.padding === "2" || props.padding === 2,
      "p-3": props.padding === "3" || props.padding === 3,
      rounded: props.rounded,
      bordered: props.bordered,
      transparent: props.transparent,
      dark: isDark.value,
    },
  ];
});

// const headingClasses = computed(() => {
//   return {
//     indexed: props.indexText !== null,
//   };
// });

const cssProps = computed(() => {
  return {
    "--width": props.width,
    "--height": props.height,
    "--indexText": props.indexText,
  };
});

// Watchers
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.f-container {
  // base styling for container
  width: var(--width);
  height: var(--height);
  background: $container-bg-color-light;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  // transparent
  &.transparent {
    background-color: transparent;
  }

  // flex: row and column
  &.row {
    flex-direction: row;
  }

  &.column {
    flex-direction: column;
  }

  &.wrap {
    flex-wrap: wrap;
  }

  &.rounded {
    border-radius: $global-border-radius;
  }

  // paddings
  &.p-default {
    padding: 10px $container-default-padding;
  }
  &.p-1 {
    padding: 1.4rem;
  }

  &.p-2 {
    padding: 1.7rem;
  }

  &.p-3 {
    padding: 2.2rem;
  }

  .heading {
    width: 100%;
    line-height: 1.4;
    font-size: 16px;
    font-weight: 600;

    margin-bottom: $global-aesthetic-margin;
  }
}

.dark {
  .f-container {
    background: $container-bg-color-dark;
  }
}
</style>
