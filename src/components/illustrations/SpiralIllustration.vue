<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme";
const { isDark } = storeToRefs(useThemeStore());
</script>
<template>
  <section :class="{ dark: isDark }" class="no-select spiral-container">
    <svg viewBox="0 0 1154 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        id="circle10"
        cx="221.799"
        cy="786.678"
        r="805.389"
        stroke="#141414"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="4 56 4 56"
      />
      <circle
        id="circle9"
        cx="221.798"
        cy="786.678"
        r="613.117"
        stroke="#212121"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="4 52 4 52"
      />
      <circle
        id="circle8"
        cx="221.798"
        cy="786.677"
        r="466.82"
        stroke="#2b2b2b"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="4 45 4 45"
      />
      <circle
        id="circle7"
        cx="221.798"
        cy="786.677"
        r="362.208"
        stroke="#454545"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="3 40 3 40"
      />
      <circle
        id="circle6"
        cx="221.798"
        cy="786.676"
        r="279.406"
        stroke="#5c5c5c"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="3 36 3 36"
      />
      <circle
        id="circle5"
        cx="221.798"
        cy="786.601"
        r="207.738"
        stroke="#808080"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="3 30 3 33"
      />
      <circle
        id="circle4"
        cx="221.798"
        cy="786.601"
        r="145.278"
        stroke="#adadad"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="2 28 2 29"
      />
      <circle
        id="circle3"
        cx="221.799"
        cy="786.602"
        r="96.7936"
        stroke="#d1d1d1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="2 20 2 20"
      />
      <circle
        id="circle2"
        cx="219.257"
        cy="786.676"
        r="50.9485"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="5 16 5 16"
      />
      <!-- <circle
        id="circle1"
        cx="219.299"
        cy="786.719"
        r="11.5319"
        stroke="#ffffff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="3 5 3 5"
      /> -->

      <path
        id="centerStar"
        d="M212.619 775.988L221.772 780.181L223.388 783.655L227.009 776.707L225.737 785.123L221.772 788.695L231.336 789.544L221.772 791.582L218.152 788.695L219.708 797.221L214.434 788.695L216.831 784.242L207.462 789.544L215.315 781.894H219.708L212.619 775.988Z"
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
  left: -5%;
  z-index: -10;
}

svg {
  height: 70vh;
  width: 69vw;
  min-height: 550px;
  min-width: 570px;
  transform: skew(20deg, 12deg);
  will-change: transform filter;
  // animation: skewAnim 20s ease-in-out infinite alternate;
  transition: filter 0.5s ease-in-out;
  filter: invert(1) brightness(0.6);

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
    animation: rotate 4s infinite linear;
  }

  // #circle1 {
  //   animation: rotate 15s infinite linear;
  // }

  #circle2 {
    animation: rotate 25s infinite linear;
  }

  #circle3 {
    animation: rotate 40s infinite linear;
  }

  #circle4 {
    animation: rotate 60s infinite linear;
  }

  #circle5 {
    animation: rotate 85s infinite linear;
  }

  #circle6 {
    animation: rotate 115s infinite linear;
  }

  #circle7 {
    animation: rotate 140s infinite linear;
  }

  #circle8 {
    animation: rotate 190s infinite linear;
  }

  #circle9 {
    animation: rotate 240s infinite linear;
  }

  #circle10 {
    animation: rotate 320s infinite linear;
  }
}

svg * {
  transform-box: fill-box;
}

.dark {
  svg {
    filter: none;

    #centerStar {
      filter: drop-shadow(4px 4px 2px rgba(0, 234, 255, 0.7))
        drop-shadow(-4px -4px 2px rgba(255, 255, 125, 0.7))
        drop-shadow(4px -4px 2px rgba(205, 143, 255, 0.7))
        drop-shadow(-4px 4px 2px rgba(255, 255, 255, 0.7))
        drop-shadow(7px 12px 5px rgba(0, 234, 255, 0.2))
        drop-shadow(-7px -12px 5px rgba(255, 255, 125, 0.2))
        drop-shadow(7px -12px 5px rgba(205, 143, 255, 0.2))
        drop-shadow(-7px 12px 5px rgba(255, 255, 255, 0.2))
        drop-shadow(0px 0px 30px rgb(138, 255, 245));
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes skewAnim {
  0% {
    transform: skew(25deg, 25eg);
  }
  50% {
    transform: skew(18deg, 10deg);
  }
  100% {
    transform: skew(22deg, 12deg);
  }
}

@media screen and (max-width: $bp_phone) {
  .spiral-container {
    display: none;
  }
}
</style>
