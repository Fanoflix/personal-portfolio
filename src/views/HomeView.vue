<template>
  <div>
    <h1 class="name">Muhammad Ammar</h1>
    <br />
    <p>Hey, I am Ammar, Software Engineer, currently working at 10Pearls</p>
    <br />
    <p>
      I focus on writing efficient, readable, and well-structured code. My
      passion lies in creating minimalstic, fluid and smooth user experiences
      where the user is front and center. I have the skill set for a complete
      development lifecycle having worked in a professional agile driven
      environment, from conceptualization, drawing wireframes, drawing designs
      to development. Creating new standards and bridging gaps in the field of
      Software Engineering is one of my goals in life.
    </p>
    <br />
    <p>
      I currently spend most of my free time: 1) Researching Google's Core Web
      Vitals (CWV). 2) Creating low-cost animations for low-end devices keeping
      the 'next billion users' in mind. 3) As a fun side quest, I sometimes list
      down any points of friction I am able to find in a website.
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
  // width: $global-center-content-width;
}

.name {
  font-size: 35px;
  font-weight: 600;
  letter-spacing: -1px;
}

p {
  line-height: 1.8;
}
</style>
