<template>
  <div>
    <h1>Hello</h1>
    <h2>I am Muhammad Ammar</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, expedita
      mollitia sint unde ex minima quibusdam animi fugit odit molestiae sed
      quasi sit, tempore ipsam officiis! Temporibus excepturi vel odit.
    </p>
  </div>
</template>

<script setup lang="ts">
import FContainer from "../components/container/FContainer.vue";
import FButton from "../components/button/FButton.vue";
import { ref } from "vue";
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
div {
  width: $global-center-content-width;
}
</style>
