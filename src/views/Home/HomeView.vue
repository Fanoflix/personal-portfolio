<template>
  <section class="home-view">
    <FSidebar />

    <RouterView v-slot="{ Component }">
      <div class="home-content">
        <Transition name="fade" mode="out-in">
          <KeepAlive include="HomeViewContact">
            <component :is="Component" />
          </KeepAlive>
        </Transition>

        <!-- <div>
          <img src="@/assets/icons/slider_handle.png" alt="" />
        </div> -->
      </div>
    </RouterView>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import FSidebar from "@/components/sidebar/FSidebar.vue"
</script>

<style lang="scss">
@import "@assets/variables.scss";
@import "@assets/screens.scss";

.home-view {
  display: flex;
  width: 100%;

  .home-content {
    display: flex;
    flex-direction: column;
    width: $center-content-width;
  }
}

@media screen and (max-width: $bp_tablet) {
  .home-view {
    flex-direction: column;
    align-items: center;

    .home-content {
      width: 100%;
    }
  }
}
</style>
