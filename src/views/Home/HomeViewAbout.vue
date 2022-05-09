<template>
  <div v-once>
    <div class="name-wrapper">
      <h1 id="name">Muhammad Ammar</h1>
      <MyLogo id="logo" />
    </div>

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
      <FInlineLink href="https://web.dev/vitals/">Core Web Vitals</FInlineLink>
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

    <p>
      If you have some time to spare, please consider checking out this
      <FInlineLink to="/survey">survey on code review practices.</FInlineLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import MyLogo from "@/components/mylogo/MyLogo.vue";
import FInlineLink from "@/components/inlinelink/FInlineLink.vue";
// import FContainer from "@/components/container/FContainer.vue";
// import FButton from "@/components/button/FButton.vue";
</script>

<script lang="ts">
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/screens.scss";

.name-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  #logo {
    height: 70px;
  }
}
p {
  line-height: 1.7;
  margin: 25px 0;
}

@media screen and (max-width: $bp-phone) {
  .name-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    #logo {
      order: 1;
      height: 70px;
    }
    #name {
      order: 2;
    }
  }
}
</style>
