<template>
  <div class="contact">
    <h1>Leave a message</h1>
    <br />
    <form>
      <FInput customClasses="field" label="Name" size="sm" />
      <FInput customClasses="field" label="Email" size="sm" />
      <FInput
        customClasses="field"
        type="textarea"
        scale="y"
        label="Message"
        size="sm"
      />
      <FButton
        size="sm"
        customClasses="submit-btn"
        label="Send"
        type="secondary"
        outlined
        @click.prevent="submit"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import FInput from "../components/input/FInput.vue";
import FButton from "../components/button/FButton.vue";
</script>

<style lang="scss">
.contact {
  .field,
  .submit-btn {
    margin: 15px 0;
    width: 85%;
  }

  .field:first-child {
    margin: 0;
  }

  .submit-btn {
    // margin: 0 auto;
  }
}
</style>
