<template>
  <FNavbar @toggleSidebar="toggleSidebar" />

  <div class="main-display">
    <FSidebar ref="sidebar" :isVisible="true" />

    <!-- Make this a component later-->
    <RouterView v-slot="{ Component }">
      <div class="current-view">
        <Transition name="fade" mode="out-in">
          <KeepAlive exclude="HomeView">
            <component :is="Component"> </component>
          </KeepAlive>
        </Transition>
      </div>
    </RouterView>
  </div>
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
// const sidebar = ref(null);
const isSideBarVisible = ref(false);

onBeforeMount(() => {
  let storedIsDark = JSON.parse(localStorage.getItem("isDark") || "true");
  if (storedIsDark) {
    body?.classList.add("dark");
  }
  setIsDark(storedIsDark);
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

.main-display {
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  margin: $global-aesthetic-margin + 20px auto;

  .current-view {
    display: flex;
    flex-direction: column;
    width: $global-center-content-width;
  }
}

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
