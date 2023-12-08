<template>
  <section class="home-view">
    <div class="overlay"></div>
    <div class="overlay-2"></div>
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
import FSidebar from "@/components/sidebar/FSidebar.vue"
</script>

<style lang="scss">
@import "@assets/variables.scss";
@import "@assets/screens.scss";

.home-view {
  display: flex;
  position: relative;
  width: 110%;
  padding: 48px;

  .home-content {
    display: flex;
    flex-direction: column;
    width: $center-content-width;
  }
}

.dark .home-view {
  border: 1px solid rgb(30, 30, 30);
  border-radius: 5px;

  .overlay {
    position: absolute;
    background-image: url("../../assets/patterns/dark-grain.png");
    border-radius: 5px;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: repeat;
    mix-blend-mode: difference;
    pointer-events: none;
  }

  .overlay-2 {
    position: absolute;
    border-radius: 5px;
    background: radial-gradient(
      ellipse at right,
      rgb(30, 30, 30),
      rgb(9, 9, 9)
    );

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: repeat;
    mix-blend-mode: difference;
    pointer-events: none;
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
