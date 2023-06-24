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
      I currently spend most of my free time brainstorming productivity software
      ideas. I am also currently conceptualizing an 'ideas organizer', possibly
      with features that
      <FInlineLink href="https://www.notion.so">Notion</FInlineLink> doesn't
      provide yet.
    </p>

    <p>
      Besides programming, I enjoy gaming (mostly
      <FToolTip title="Diablo IV" placement="top">
        <FInlineLink
          :underlined="false"
          href="https://diablo4.blizzard.com/en-us/"
        >
          <img
            class="game-icon"
            src="../../assets/icons/diablo4.png"
            alt="Diablo 4"
          />
        </FInlineLink>
      </FToolTip>
      and &nbsp;
      <FToolTip title="World of Warcraft" placement="top">
        <FInlineLink
          :underlined="false"
          href="https://worldofwarcraft.blizzard.com/en-us/"
        >
          <img
            class="game-icon"
            src="../../assets/icons/wow100x100.png"
            alt="World of Warcraft"
          />
        </FInlineLink>
      </FToolTip>
      ) and
      <FInlineLink href="https://www.instagram.com/fanoflix.art/"
        >sketching</FInlineLink
      >. I love meeting new people and discussing software engineering practices
      with just about anyone.
    </p>

    <p>
      If you are in Karachi I would love to have a chat about SWE and tech, or
      we could just code together. Leave a
      <FInlineLink to="/contact">message</FInlineLink>, let's talk.
    </p>
  </div>
</template>

<script setup lang="ts">
import MyLogo from "@/components/mylogo/MyLogo.vue"
import FInlineLink from "@/components/inlinelink/FInlineLink.vue"
import FToolTip from "@/components/tooltip/FToolTip.vue"
</script>

<script lang="ts">
export default {
  name: "HomeView",
  components: { FToolTip, FInlineLink },
}
</script>

<style lang="scss" scoped>
@import "@assets/variables.scss";
@import "@assets/screens.scss";

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

.game-icon {
  height: auto;
  width: 27px;
  margin-bottom: -8px;

  &:hover {
    filter: brightness(1.2);
  }
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
