<template>
  <FNavbar />
  <RouterView> </RouterView>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import { onBeforeMount } from "vue";
import FNavbar from "./components/navbar/FNavbar.vue";

const body: HTMLElement | null = document.querySelector("body");
const themeStore = useThemeStore();
const { setIsDark } = themeStore;

onBeforeMount(() => {
  let storedIsDark = JSON.parse(localStorage.getItem("isDark") || "true");
  if (storedIsDark) {
    body?.classList.add("dark");
  }
  setIsDark(storedIsDark);
});

// changing Body's background color according to isDark in store theme.js
themeStore.$subscribe((_, state) => {
  if (state.isDark) {
    body?.classList.add("dark");
  } else {
    body?.classList.remove("dark");
  }
});
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/base-styling.scss";
@import "@/assets/screens.scss";
@include base-styling;

.fade-enter-from {
  opacity: 0;
  transform: translateX(-1px) skewY(1deg) rotateZ(-1deg);
  transform-origin: bottom left;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(1px) skewY(-1deg) rotateZ(1deg);
  transform-origin: bottom left;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 125ms linear, opacity 100ms linear;
}
</style>
