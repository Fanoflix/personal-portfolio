<template>
  <span class="line-cli-icon"> &#129058; <span> ~ </span></span>
</template>

<script lang="ts">
export default {
  name: "FancyLinePrefix",
}
</script>

<style lang="scss">
@import "@/assets/variables";
.line-cli-icon {
  color: $success-light;
  opacity: 0.5;
  font-size: 13px;

  span {
    color: rgb(2, 151, 151);
    margin-left: -8px;
    bottom: 1px;
  }

  &::after {
    content: "";
    margin-right: 2px;
    bottom: 5px;
  }
}
</style>
