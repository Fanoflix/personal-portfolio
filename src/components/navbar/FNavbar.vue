<template>
  <section :class="navbarClasses">
    <FLink class="nav-item no-select pointer" size="md" type="secondary" to="/">
      Home
    </FLink>

    <!-- <FLink
      class="nav-item no-select pointer"
      size="md"
      type="secondary"
      to="/projects"
    >
      Projects
    </FLink> -->

    <FLink
      class="nav-item no-select pointer"
      size="md"
      type="secondary"
      to="/surveys"
    >
      Surveys
    </FLink>

    <FToolTip class="nav-item no-select" title="Github" placement="bottom">
      <a
        href="https://github.com/Fanoflix"
        target="_blank"
        rel="noopener noreferrer"
        class="icon pointer"
      >
        <img src="@/assets/icons/github.svg" alt="Github.com" />
      </a>
    </FToolTip>

    <FToolTip class="nav-item no-select" title="LinkedIn" placement="bottom">
      <a
        href="https://www.linkedin.com/in/ammar-nasir/"
        target="_blank"
        rel="noopener noreferrer"
        class="icon pointer"
      >
        <img src="@/assets/icons/linkedin.svg" alt="linkedin.com" />
      </a>
    </FToolTip>

    <FToolTip
      class="nav-item no-select"
      title="Stackoverflow"
      placement="bottom"
    >
      <a
        href="https://stackoverflow.com/users/16470281/muhammad-ammar"
        target="_blank"
        rel="noopener noreferrer"
        class="icon pointer"
      >
        <img src="@/assets/icons/stackoverflow.svg" alt="stackoverflow.com" />
      </a>
    </FToolTip>

    <FToolTip
      class="nav-item no-select theme-icon"
      title="Theme"
      placement="bottom"
      @click.exact.prevent="toggleTheme()"
      @keyup.enter.prevent="toggleTheme()"
    >
      <a tabIndex="0" class="icon pointer">
        <img ref="themeIcon" :src="themeIconSource" alt="Toggle theme" />
      </a>
    </FToolTip>
  </section>
</template>

<script setup lang="ts">
import FLink from "../link/FLink.vue";
import FToolTip from "@/components/tooltip/FToolTip.vue";
import { useThemeStore } from "@/stores/theme";
import { computed, ref } from "vue";
import type { Ref } from "vue";
import { storeToRefs } from "pinia";

const themeStore = useThemeStore();
const { changeTheme } = themeStore;
const { isDark } = storeToRefs(themeStore); // same thing as the above line
const themeIcon: Ref<HTMLImageElement | null> = ref(null);

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

function toggleTheme(): void {
  themeIcon.value!.style.transition = "transform 0.6s ease-in-out";
  if (isDark.value) themeIcon.value!.style.transform = "rotateZ(360deg)";
  else themeIcon.value!.style.transform = "rotateZ(0deg)";
  changeTheme();
}
const navbarClasses = computed(() => {
  return [
    "navbar",
    { filled: props.filled, rounded: props.rounded, dark: isDark.value },
  ];
});

const themeIconSource = computed(() => {
  if (isDark.value)
    return new URL("../../assets/icons/sun.svg", import.meta.url).href;
  else return new URL("../../assets/icons/moon.svg", import.meta.url).href;
});
</script>

<style scoped lang="scss">
@import "@assets/variables.scss";
@import "@assets/screens.scss";

.navbar {
  position: sticky;
  top: 0;
  left: 0;
  padding: 0 $nav-x-padding;
  backdrop-filter: blur(22px);

  z-index: $z-top + 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: $nav-height;

  .nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: auto;

    margin: $global-aesthetic-margin + 2px;

    .icon {
      height: 17px;
      width: 17px;

      :hover {
        filter: brightness(0.2);
      }

      &.theme-icon {
        transform: rotate(-360deg);
      }
    }
  }

  &.filled {
    background-color: $panel-bg-color-light;
    border: none;
  }

  &:not(.filled) {
    background-color: transparent;
  }

  &.rounded {
    border-radius: $global-border-radius;
  }
}

.dark.navbar {
  .nav-item {
    .icon {
      :hover {
        filter: brightness(2);
      }
    }
  }

  &.filled {
    background-color: $panel-bg-color-dark;
    border: none;
  }
}

@media screen and (max-width: $bp_tablet) {
  .navbar {
    height: $nav-phone-height;
    background: transparent;
    padding: 0 $nav-x-padding - 20px;

    .nav-item {
      margin: $global-aesthetic-margin - 2px;

      .icon {
        height: 19px;
        width: 16px;
      }
    }
  }
}

@media screen and (max-width: $bp_woodenphone) {
  .navbar {
    padding: 0 $nav-x-padding - 30px;
    .nav-item {
      margin: $global-aesthetic-margin - 4px;

      .icon {
        height: 19px;
        width: 15px;
      }
    }
  }
}
</style>
