<template>
  <div>
    <section class="questionnaire" v-if="isFinished && !error">
      <FContainer
        class="question"
        padding="1"
        rounded
        v-for="(question, idx) in data?.survey.questions"
        :key="question.id"
        :heading="`${idx + 1}. ${question.title}`"
        width="100"
      >
        <span v-if="question.type == 'radio'">
          <FRadio
            rounded
            :name="question.id"
            v-for="choice in question.questionChoices"
            :key="choice.id"
            v-model="question.answerChoiceText"
            :native-value="choice.choiceText"
          >
            {{ choice.choiceText }}
          </FRadio>
        </span>
        <span v-else>
          <FInput
            rounded
            :label="
              question.subtext ? `Required. ${question.subtext}` : 'Required'
            "
            :type="question.type"
            v-model="question.answerText"
            scale="y"
            size="sm"
            :required="question.required"
          />
        </span>
      </FContainer>

      <div class="buttons">
        <FButton label="Maybe Later" size="sm" outlined type="danger"></FButton>
        <FButton
          label="Submit Response"
          size="sm"
          type="primary"
          @click.prevent="submit"
        ></FButton>
      </div>
    </section>
    <FLoading v-else></FLoading>
  </div>
</template>

<script setup lang="ts">
import FContainer from "@/components/container/FContainer.vue";
import FRadio from "@/components/radio/FRadio.vue";
import FInput from "@/components/input/FInput.vue";
import FButton from "@/components/button/FButton.vue";
import FLoading from "@/components/loading/FLoading.vue";
import processRequest from "../utils/processRequest";

import { useAxios } from "@/composables/useAxios";
import { onMounted, ref, reactive, nextTick } from "vue";

const url = "http://localhost:5000";

const { data, isLoading, error, isFinished } = useAxios(`${url}/survey/1`);

function submit() {
  console.log(data.value);
  // processRequest("response", "post", data.value)?.then((res) => {
  //   console.log(res.data);
  // });
}
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.questionnaire {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: $center-content-width;

  pre {
    font-size: 10px;
  }

  .question {
    margin-bottom: 15px;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    button {
      margin-right: 15px;
    }
  }
}
</style>
