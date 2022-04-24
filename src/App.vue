<template>
  <FNavbar @toggleSidebar="toggleSidebar" filled />
  <FSidebar ref="sidebar" :isVisible="isSideBarVisible" filled />

  <!-- Make this a component later-->
  <RouterView v-slot="{ Component }">
    <div class="current-view">
      <Transition name="fade" mode="out-in">
        <component :is="Component"> </component>
      </Transition>
    </div>
  </RouterView>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { useThemeStore } from "@/stores/theme";
import { onBeforeMount, ref } from "vue";
import FNavbar from "./components/navbar/FNavbar.vue";
import FSidebar from "./components/sidebar/FSidebar.vue";

const body: HTMLElement | null = document.querySelector("body");
const themeStore = useThemeStore();
const { setIsDark } = themeStore;
const sidebar = ref(null);
const isSideBarVisible = ref(false);

onBeforeMount(() => {
  let storedIsDark = JSON.parse(localStorage.getItem("isDark") || "false");
  if (storedIsDark) {
    body?.classList.add("dark");
    setIsDark(storedIsDark);
  }
});

function toggleSidebar() {
  isSideBarVisible.value = !isSideBarVisible.value;
}

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
@include base-styling;

.nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 5vh;

  .left {
    display: flex;

    button {
      margin-right: 6px;
    }
  }

  .right {
    display: flex;
    button {
      margin-left: 6px;
    }
  }
}

.current-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;

  padding: 15px;

  min-height: calc(98vh - ($nav-height + (3 * $global-aesthetic-margin)));
  margin: 0px $global-aesthetic-margin;
  margin-top: (2 * $global-aesthetic-margin);
  margin-bottom: (2 * $global-aesthetic-margin);
  border-radius: 5px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.075s linear, opacity 0.1s ease-out;
}
</style>
