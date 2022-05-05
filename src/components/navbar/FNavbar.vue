<template>
  <section :class="navbarClasses">
    <div class="left"></div>

    <div class="right">
      <FLink
        class="nav-item no-select pointer"
        rounded
        size="md"
        type="secondary"
        to="/survey"
      >
        Surveys
      </FLink>

      <FToolTip
        class="nav-item no-select icon pointer"
        title="Github"
        placement="bottom"
      >
        <a
          href="https://github.com/Fanoflix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/icons/github.svg" alt="Github.com" />
        </a>
      </FToolTip>

      <FToolTip
        class="nav-item no-select icon pointer"
        title="LinkedIn"
        placement="bottom"
      >
        <a
          href="https://www.linkedin.com/in/muhammad-ammar-nasir-9b2193207/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/icons/linkedin.svg" alt="linkedin.com" />
        </a>
      </FToolTip>

      <FToolTip
        class="nav-item no-select icon pointer"
        title="Stackoverflow"
        placement="bottom"
      >
        <a
          href="https://stackoverflow.com/users/16470281/muhammad-ammar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/icons/stackoverflow.svg" alt="stackoverflow.com" />
        </a>
      </FToolTip>

      <FToolTip
        class="nav-item no-select icon pointer theme-icon"
        title="Toggle Theme"
        placement="bottom"
      >
        <a @click.prevent="toggleTheme">
          <img :src="themeIconSource" alt="Toggle theme" />
        </a>
      </FToolTip>
    </div>
  </section>
</template>

<script setup lang="ts">
import FLink from "../link/FLink.vue";
import FToolTip from "@/components/tooltip/FToolTip.vue";
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
  targetEle.style.transition = "transform 0.4s ease-in-out";
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
    height: 17px;
    width: 17px;
    margin: $global-aesthetic-margin;

    :hover {
      filter: brightness(0.2);
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
