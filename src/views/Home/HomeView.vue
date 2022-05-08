<template>
  <div class="homeview">
    <FSidebar />

    <RouterView v-slot="{ Component }">
      <div class="current-view">
        <Transition name="fade" mode="out-in">
          <KeepAlive include="HomeViewContact">
            <component :is="Component"> </component>
          </KeepAlive>
        </Transition>
      </div>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import FSidebar from "@/components/sidebar/FSidebar.vue";
</script>

<style lang="scss">
@import "@/assets/variables.scss";
@import "@/assets/base-styling.scss";
@import "@/assets/screens.scss";
@include base-styling;

.homeview {
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  margin: $global-aesthetic-margin + 20px auto;

  .current-view {
    display: flex;
    flex-direction: column;
    width: $center-content-width;
  }
}

@media screen and (max-width: $bp_phone) {
  .homeview {
    .current-view {
      width: $phone-center-content-width;
    }
  }
}
</style>
