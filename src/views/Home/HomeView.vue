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
import FSidebar from "@/components/sidebar/FSidebar.vue"
</script>

<style lang="scss">
@import "@assets/variables.scss";
@import "@assets/screens.scss";

.home-view {
  display: flex;
  width: 110%;
  padding: 50px 30px;
  border-radius: 15px;

  .home-content {
    display: flex;
    flex-direction: column;
    width: $center-content-width;
  }
}

.dark .home-view {
  border: 1px solid rgb(34, 34, 34);

  &::before {
    content: "";
    position: absolute;
    border-radius: 10px;
    left: 5px;
    top: 5px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border: 1px solid rgb(23, 23, 23);
    background-image: url("../../assets/patterns/dark-grain.png");
    z-index: -10;
  }

  // &::after {
  //   content: "";
  //   position: absolute;
  //   border-radius: 12px;
  //   left: 5px;
  //   top: 5px;
  //   width: calc(100% - 10px);
  //   height: calc(100% - 10px);
  //   background-image: linear-gradient(
  //     20deg,
  //     rgba(60, 60, 60, 0.25),
  //     rgba(8, 8, 8, 0.2) 15%,
  //     rgba(8, 8, 8, 0.2) 75%,
  //     rgba(60, 60, 60, 0.25)
  //   );
  //   z-index: -5;
  // }
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
