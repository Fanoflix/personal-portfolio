<template>
  <div
    :style="cssProps"
    class="keybind-graphic-container"
    :class="containerClasses"
  >
    <p
      class="oneKey"
      :class="itemClasses"
      v-for="(oneKey, index) in processedKeybinds"
      :key="oneKey + index"
    >
      {{ oneKey }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const ELEVATION_MULTIPLE = 2.5
/**
 * @state
 */

interface KeybindGraphicProps {
  keybindText: string // Example: ctrl+enter
  padding?: string // px
  borderRadius?: string // px
  elevated?: boolean
  elevation?: string // px (elevaton cannot be greater than 2.5 of fontSize)
  bordered?: boolean
  borderSize?: string
  borderColor?: string
  gap?: string // px
  fontSize?: string // px
  fontWeight?: number
  fontColor?: string
  uppercase?: boolean
  capitalize?: boolean
  italize?: boolean
  split?: boolean // each key is split in its own container, splits at character "+". The final result will not contain "+"
  backgroundColor?: string
  elevationColor?: string
  opacity?: string
}

/**
 * @props
 */
const props = withDefaults(defineProps<KeybindGraphicProps>(), {
  padding: "2px",
  borderRadius: "4px",
  elevated: true,
  elevation: "2px",
  elevationColor: "rgb(255,255,255)",
  bordered: true,
  borderSize: "1px",
  borderColor: "rgb(255,255,255)",
  gap: "6px",
  fontSize: "12px",
  fontWeight: 600,
  fontColor: "inherit",
  split: true,
  uppercase: false,
  capitalize: true, // uppercase has more priority
  italize: false,
  backgroundColor: "rgb(50,50,50)",
  opacity: "1",
})

/**
 * @computed
 */

const containerClasses = computed(() => {
  return [
    {
      "keybind-uppercase": props.uppercase,
      "keybind-capitalize": !props.uppercase && props.capitalize,
      "keybind-italize": props.italize,
    },
  ]
})

const itemClasses = computed(() => {
  return [
    {
      "item-elevated": props.elevated,
      "item-bordered": props.bordered,
    },
  ]
})

const clampedElevation = computed<string>(() => {
  // elevaton cannot be greater than ELEVATION_MULTIPLE of fontSize
  const elevation = parseInt(props.elevation.replace("px", ""))
  const fontSize = parseInt(props.fontSize.replace("px", ""))
  return elevation > Math.floor(fontSize / ELEVATION_MULTIPLE)
    ? `${Math.floor(fontSize / ELEVATION_MULTIPLE)}px`
    : `${elevation}px`
})

const isSplittable = computed(() => {
  return props.split && props.keybindText.includes("+")
})

const processedKeybinds = computed(() => {
  if (!isSplittable.value) return [props.keybindText]
  return props.keybindText.split("+")
})

const cssProps = computed(() => {
  return {
    "--padding": props.padding,
    "--elevation": clampedElevation.value, // border-bottom
    "--elevation-color": props.elevationColor,
    "--gap": props.gap,
    "--font-size": props.fontSize,
    "--font-weight": props.fontWeight,
    "--font-color": props.fontColor,
    "--background-color": props.backgroundColor,
    "--borderRadius": props.borderRadius,
    "--border-size": props.borderSize,
    "--border-color": props.borderColor,
    "--opacity": props.opacity,
  }
})
</script>

<style lang="scss" scoped>
.keybind-graphic-container {
  display: inline-block;
  opacity: var(--opacity);

  &.keybind-uppercase {
    text-transform: uppercase;
  }
  &.keybind-capitalize {
    text-transform: capitalize;
  }

  &.keybind-italized {
    font-style: italic;
  }

  &:not(.keybind-italize) {
    font-style: normal;
  }

  .oneKey {
    &:last-child {
      margin-right: 0;
    }

    color: var(--font-color);
    margin-right: var(--gap);

    background-color: var(--background-color);
    display: inline-block;

    padding: calc(0.5 * var(--padding)) calc(2 * var(--padding));
    width: fit-content;
    height: 100%;

    font-size: var(--font-size);
    font-weight: var(--font-weight);

    &.item-elevated {
      box-shadow: 0px var(--elevation) 0px 0px var(--elevation-color);
    }

    &.item-bordered {
      border-radius: var(--borderRadius);
      border: var(--border-size) solid var(--border-color);
    }
  }
}
</style>
