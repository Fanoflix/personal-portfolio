<template>
  <section :class="navbarClasses">
    <div class="left"></div>

    <div class="right">
      <FLink
        title="Fill a survey to answer some questions in the mind of Fresh graduates regarding some industry practices"
        rounded
        class="nav-item"
        size="md"
        type="secondary"
        to="/survey"
      >
        Surveys
      </FLink>

      <a
        title="Github"
        class="nav-item no-select icon pointer"
        href="https://github.com/Fanoflix"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="@/assets/icons/github.svg" alt="Github.com" />
      </a>

      <a
        title="Toggle Theme"
        class="nav-item no-select icon pointer theme-icon"
        @click.prevent="toggleTheme"
      >
        <img :src="themeIconSource" alt="Toggle theme" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import FLink from "../link/FLink.vue";
import FButton from "../button/FButton.vue";
import { useThemeStore } from "@/stores/theme";
import { computed, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";

const themeStore = useThemeStore();
const { changeTheme } = themeStore;
const { isDark } = storeToRefs(themeStore); // same thing as the above line

// Props
const props = defineProps({
  filled: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
});

const toggleTheme = (e) => {
  let targetEle = e.target;
  targetEle.style.transition = "transform 0.3s ease-in-out";
  if (isDark.value) targetEle.style.transform = "rotateZ(360deg)";
  else targetEle.style.transform = "rotateZ(0deg)";
  changeTheme();
};
const navbarClasses = computed(() => {
  return [
    "navbar",
    { filled: props.filled, rounded: props.rounded, dark: isDark.value },
  ];
});

const themeIconSource = computed(() => {
  console.log(import.meta.url);
  if (isDark.value)
    return new URL("../../assets/icons/sun.svg", import.meta.url).href;
  else return new URL("../../assets/icons/moon.svg", import.meta.url).href;
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.navbar {
  z-index: $z-top;
  position: sticky;
  top: 0;
  margin: 0;
  padding: $global-padding;
  min-width: 280px;
  padding: 0 $nav-x-padding;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $nav-height;

  &.filled {
    background-color: $panel-bg-color-light;
    border: none;
  }

  &:not(.filled) {
    background-color: $color-background;
  }

  &.rounded {
    border-radius: $global-border-radius;
  }

  .left,
  .right {
    display: flex;
  }

  .left {
    #logo {
      height: 50px;
      width: 120px;
    }
  }

  .icon {
    height: 18px;
    width: 18px;
    margin: $global-aesthetic-margin;

    :hover {
      filter: brightness(0.3);
    }

    &.theme-icon {
      transform: rotate(-360deg);
    }
  }

  .nav-item:not(.icon) {
    display: flex;
    align-items: center;
    width: $nav-item-width;
    margin: $global-aesthetic-margin - 3px;
    justify-content: center;
  }
}

.dark.navbar {
  .icon {
    :hover {
      filter: brightness(2);
    }
  }
  &.filled {
    background-color: $panel-bg-color-dark;
    border: none;
  }

  &:not(.filled) {
    background-color: $color-background-dark;
  }
}
</style>
