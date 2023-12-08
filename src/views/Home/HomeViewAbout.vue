<template>
  <div v-once>
    <div class="name-wrapper">
      <h1 id="name">Muhammad Ammar</h1>
      <MyLogo id="logo" />
    </div>

    <div class="description">
      <p>
        Ammar. 24. Software Engineer. Works at a
        <FInlineLink href="https://www.ycombinator.com/">YC</FInlineLink>
        Tech Startup. Currently in
        <FInlineLink href="https://www.linkedin.com/company/stealth-startup-51"
          >stealth mode</FInlineLink
        >.
      </p>

      <p>
        Passionate about writing efficient, readable, and well-structured code.
        Likes to be creative with design and Software Engineering and their
        blend.
      </p>

      <p>Spends free time brainstorming productivity software ideas.</p>

      <p>
        Plays

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
        and
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
          </FInlineLink> </FToolTip
        >. Also does
        <FInlineLink href="https://www.instagram.com/fanoflix.art/"
          >sketching</FInlineLink
        >.
      </p>

      <p></p>

      <p>
        Leave a
        <FInlineLink to="/contact">message</FInlineLink>, let's talk.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import FancyLinePrefix from "@/components/fancylineperfix/FancyLinePrefix.vue"
import FInlineLink from "@/components/inlinelink/FInlineLink.vue"
import MyLogo from "@/components/mylogo/MyLogo.vue"
import FToolTip from "@/components/tooltip/FToolTip.vue"
</script>

<script lang="ts">
export default {
  name: "HomeView",
  components: { FToolTip, FInlineLink, MyLogo, FancyLinePrefix },
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

.description {
  margin-top: 25px;

  p {
    line-height: 1.7;
    margin-bottom: 28px;
  }

  .game-icon {
    height: auto;
    width: 27px;
    margin-bottom: -8px;

    &:hover {
      filter: brightness(1.4);
    }
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
