<template>
  <div>
    <h1>Muhammad Ammar</h1>

    <p>
      Hello, I am Ammar, a Software Engineer. Currently working at
      <FInlineLink href="https://10pearls.com/">10Pearls</FInlineLink>.
    </p>

    <p>
      My passion lies in writing efficient, readable, and well-structured code.
      Creating new standards and bridging gaps in the field of Software
      Engineering is one of my goals in life.
    </p>

    <p>
      I currently spend most of my free time researching
      <FInlineLink href="https://web.dev/vitals/"
        >Google's Core Web Vitals</FInlineLink
      >
      and occasionally digging for points of friction in random websites.
    </p>

    <p>
      Besides programming, I enjoy gaming and sketching. I love meeting new
      people and discussing software engineering practices with just about
      anyone.
    </p>

    <p>
      If you are in Karachi I would love to have a chat about SWE and tech, or
      we could just code together. Leave a
      <FInlineLink to="/contact">message</FInlineLink>, let's talk.
    </p>
  </div>
</template>

<script setup lang="ts">
import FContainer from "../components/container/FContainer.vue";
import FButton from "../components/button/FButton.vue";
import FInlineLink from "../components/inlinelink/FInlineLink.vue";
import { ref } from "vue";
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
div {
  // width: $global-center-content-width;
}

p {
  line-height: 1.8;
  margin: 25px 0;
}
</style>
