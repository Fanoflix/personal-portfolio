<template>
  <div class="contact">
    <h1>Leave a message</h1>
    <br />
    <form>
      <FInput customClasses="field" label="Name" size="sm" ref="firstInput" />

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
        type="primary"
        @click.prevent="submit"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import FInput from "@/components/input/FInput.vue";
import FButton from "@/components/button/FButton.vue";
import { onActivated, onMounted, ref } from "vue";

const firstInput = ref(null);
onMounted(() => {
  firstInput.value?.input.focus();
});

onActivated(() => {
  firstInput.value?.input.focus();
});
</script>

<script lang="ts">
export default {
  name: "HomeViewContact",
};
</script>

<style lang="scss">
@import "@/assets/screens.scss";
@import "@/assets/variables.scss";

.contact {
  display: flex;
  flex-direction: column;

  .field,
  .submit-btn {
    margin: 15px 0;
    width: 80%;
  }

  .field:first-child {
    margin: 0;
  }
}

@media screen and (max-width: $bp_tablet) {
  .contact {
    margin-top: 50px;

    .field,
    .submit-btn {
      width: 100%;
    }
  }
}
</style>
