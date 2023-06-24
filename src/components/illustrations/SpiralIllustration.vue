<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useThemeStore } from "@/stores/theme"
const { isDark } = storeToRefs(useThemeStore())
</script>
<template>
  <section :class="{ dark: isDark }" class="no-select spiral-container">
    <svg viewBox="0 0 1154 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        id="circle10"
        cx="221"
        cy="786"
        r="805"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="6 175 6 175"
      />

      <circle
        id="circle9"
        cx="221"
        cy="786"
        r="613"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="5 170 5 170"
      />

      <circle
        id="circle8"
        cx="221"
        cy="786"
        r="466"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="4 130 4 130"
      />

      <circle
        id="circle7"
        cx="221"
        cy="786"
        r="362"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="3 120 3 120"
      />

      <circle
        id="circle6"
        cx="221"
        cy="786"
        r="279"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="3 110 3 110"
      />

      <circle
        id="circle5"
        cx="221"
        cy="786"
        r="207"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="3 100 3 100"
      />

      <circle
        id="circle4"
        cx="221"
        cy="786"
        r="145"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="2 82 2 80"
      />

      <circle
        id="circle3"
        cx="221"
        cy="786"
        r="96"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="2 75 2 75"
      />
      <circle
        id="circle2"
        cx="219"
        cy="786"
        r="51"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="2 63 2 70"
      />
      <!-- <circle
        id="circle1"
        cx="219.299"
        cy="786.719"
        r="13"
        stroke="#ffffff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="5 5 5 5"
      /> -->

      <path
        id="centerStar"
        d="M234.859 775.501L224.259 774.449L218.207 780.064L219.165 783.3L214.574 779.615L219.903 770.571L212.116 778.934L213.222 784.546L219.165 787.555L212.116 790.091L207.37 785.372L212.116 792.094L218.817 792.387L222.909 789.514L222.432 795.417L214.574 799.731L224.948 795.417L226.523 790.515L224.948 785.372L231.612 787.002L233.355 795.417L232.638 785.372L227.524 781.503H223.364L226.176 775.967L234.859 775.501Z"
        fill="white"
      />
    </svg>
  </section>
</template>

<style scoped lang="scss">
@import "@assets/screens.scss";
.spiral-container {
  position: fixed;
  bottom: -6%;
  left: -4%;
  z-index: -10;
}

svg {
  height: 65vh;
  width: 66vw;
  min-height: 550px;
  min-width: 570px;
  transform: skew(40deg, 5deg) translate3d(0, 0, 0);
  will-change: transform filter;
  transition: filter 2.5s ease-in;
  filter: invert(1) brightness(0.3) contrast(2);

  #centerStar {
    filter: drop-shadow(0px 0px 10px white) drop-shadow(0px 0px 30px white)
      drop-shadow(0px 0px 40px white) drop-shadow(0px 0px 50px white);
  }

  #centerStar,
  // #circle1,
  #circle2,
  #circle3,
  #circle4,
  #circle5,
  #circle6,
  #circle7,
  #circle8,
  #circle9,
  #circle10 {
    transform-origin: 50% 50%;
  }

  #centerStar {
    animation: rotate 13s infinite ease-in-out;
  }

  #circle1 {
    animation: rotate 14s infinite ease-in-out;
    opacity: 1;
  }

  #circle2 {
    animation: rotate 15s infinite ease-in-out;
    opacity: 0.9;
  }

  #circle3 {
    animation: rotate 16s infinite ease-in-out;
    opacity: 0.8;
  }

  #circle4 {
    animation: rotate 17s infinite ease-in-out;
    opacity: 0.7;
  }

  #circle5 {
    animation: rotate 18s infinite ease-in-out;
    opacity: 0.6;
  }

  #circle6 {
    animation: rotate 19s infinite ease-in-out;
    opacity: 0.5;
  }

  #circle7 {
    animation: rotate 20s infinite ease-in-out;
    opacity: 0.4;
  }

  #circle8 {
    animation: rotate 21s infinite ease-in-out;
    opacity: 0.3;
  }

  #circle9 {
    animation: rotate 22s infinite ease-in-out;
    opacity: 0.2;
  }

  #circle10 {
    animation: rotate 23s infinite ease-in-out;
    opacity: 0.1;
  }
}

svg * {
  transform-box: fill-box;
}

.dark {
  svg {
    filter: none;

    #centerStar {
      filter: drop-shadow(0px 0px 17px rgba(0, 234, 255, 0.4))
        drop-shadow(-1px -1px 2px rgb(208, 0, 255))
        drop-shadow(1px 1px 2px rgb(208, 0, 255))
        drop-shadow(1px 1px 2px rgb(0, 242, 255))
        drop-shadow(0px 0px 25px rgba(0, 234, 255, 0.2))
        drop-shadow(0px 7px 20px rgb(247, 0, 255, 0.3))
        drop-shadow(0px 20px 40px rgba(0, 234, 255, 0.3))
        drop-shadow(5px 15px 35px rgba(242, 255, 0, 0.2))
        drop-shadow(0px -40px 80px rgba(0, 234, 255, 0.7));
    }

    // #circle2 {
    //   filter: drop-shadow(2px 2px 10px rgba(102, 0, 255, 0.5))
    //     drop-shadow(-2px -2px 9px rgba(41, 80, 255, 0.5))
    //     drop-shadow(0px 0px 3px rgba(0, 234, 255, 0.6))
    //     drop-shadow(0px 0px 25px rgb(0, 157, 255));
    // }
  }
}

@keyframes rotate {
  30% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes skewAnim {
  0% {
    transform: rotate(5deg) skew(20deg, 15deg);
  }
  50% {
    transform: rotate(2deg) skew(25deg, 15deg);
  }
  100% {
    transform: rotate(3deg) skew(30deg, 15deg);
  }
}

@media screen and (max-width: $bp_phone) {
  .spiral-container {
    display: none;
  }
}
</style>
