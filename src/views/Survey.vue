<template>
  <div>
    <section class="questionnaire" v-if="isFinished && !error">
      <SurveyIntro class="survey-item" :surveyTitle="data?.survey.surveyTitle">
        <p>
          {{ data?.survey.instructions }}
        </p>
        <p>
          <strong>
            {{ data?.survey.otherInfo }}
          </strong>
        </p>
      </SurveyIntro>
      <FContainer
        class="survey-item"
        padding="1"
        v-for="(question, idx) in data?.survey.questions"
        :key="question.id"
        :heading="`${idx + 1}. ${question.title}`"
      >
        <span v-if="question.type == 'radio'">
          <FRadio
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
        <FButton label="Cancel" size="sm" outlined type="secondary"></FButton>
        <FButton
          label="Submit"
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
import SurveyIntro from "@/components/surveyintro/SurveyIntro.vue";
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
  width: 100%;

  .survey-item {
    margin: 15px 0;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    button {
      margin-left: 15px;
    }
  }
}
</style>
