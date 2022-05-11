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

      <div class="buttons">
        <FButton
          size="sm"
          customClasses="submit-btn"
          label="Send"
          type="primary"
          outlined
          @click.prevent="submit"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import FInput from "@/components/input/FInput.vue";
import FButton from "@/components/button/FButton.vue";
import { onActivated, onMounted, ref } from "vue";

const firstInput = ref(null);
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

  .buttons {
    width: 80%;
    display: flex;
    justify-content: flex-end;
  }

  .field:first-child {
    margin: 0;
  }
}

@media screen and (max-width: $bp_tablet) {
  .contact {
    margin-top: 50px;

    .field,
    .submit-btn,
    .buttons {
      width: 100%;
    }
  }
}
</style>
