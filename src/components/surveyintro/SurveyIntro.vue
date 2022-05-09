<template>
  <section class="survey-intro-wrapper">
    <FContainer padding="1" :heading="surveyTitle">
      <slot />
    </FContainer>
  </section>
</template>

<script setup lang="ts">
import FContainer from "@/components/container/FContainer.vue";
import FButton from "@/components/button/FButton.vue";

defineProps<{
  surveyTitle: string;
}>();
</script>

<style lang="scss" scoped></style>
