<template>
  <div class="prefix-container">
    <span class="line-cli-icon-outer">~</span>
    <span class="line-cli-icon-inner">~</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "FancyLinePrefix",
}
</script>

<style lang="scss">
@import "@/assets/variables";
.prefix-container {
  display: inline-block;
  margin-right: -12px;

  .line-cli-icon-outer {
    color: $white;
    font-size: 25px;
    line-height: 0;
    font-weight: 100;
    transform: rotateX(10deg);
    filter: drop-shadow(0px 0px 5px white)
      drop-shadow(0px 0px 3px rgb(150, 150, 150));
  }

  .line-cli-icon-inner {
    color: $white;
    font-size: 25px;
    line-height: 0;
    font-weight: 100;
    left: -18px;
    top: 3px;
    filter: drop-shadow(0px 0px 5px white)
      drop-shadow(0px 0px 3px rgb(150, 150, 150));
  }
}
</style>
