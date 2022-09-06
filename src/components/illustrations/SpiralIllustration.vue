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
        stroke="#1a1a1a"
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
        stroke="#1a1a1a"
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
        stroke="#404040"
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
        stroke="#5e5e5e"
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
        stroke="#787777"
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
        stroke="#787777"
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
        stroke="#b5b5b5"
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
        stroke="#d9d9d9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="2 26 2 26"
      />
      <circle
        id="circle2"
        cx="219.257"
        cy="786.676"
        r="50.9485"
        stroke="#f0f0f0"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="2 20 2 22"
      />
      <circle
        id="circle1"
        cx="219.299"
        cy="786.719"
        r="11.5319"
        stroke="#f0f0f0"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="1 10 1 10"
      />

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
  bottom: -5%;
  left: -5%;
  z-index: -10;
}

svg {
  height: 59vh;
  width: 60vw;
  min-height: 550px;
  min-width: 570px;
  transform: skew(25deg, 10deg);
  animation: skewAnim 20s ease-in-out infinite alternate;
  transition: filter 0.5s ease-in-out;
  filter: invert(1) brightness(0.8);

  #centerStar,
  #circle1,
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
    animation: rotate 7s infinite linear, flicker 3.5s infinite ease;
  }

  #circle1 {
    animation: rotate 21s infinite linear;
  }

  #circle2 {
    animation: rotate 32s infinite linear;
  }

  #circle3 {
    animation: rotate 43s infinite linear;
  }

  #circle4 {
    animation: rotate 54s infinite linear;
  }

  #circle5 {
    animation: rotate 65s infinite linear;
  }

  #circle6 {
    animation: rotate 74s infinite linear;
  }

  #circle7 {
    animation: rotate 90s infinite linear;
  }

  #circle8 {
    animation: rotate 120s infinite linear;
  }

  #circle9 {
    animation: rotate 140s infinite linear;
  }

  #circle10 {
    animation: rotate 170s infinite linear;
  }
}

svg * {
  transform-box: fill-box;
}

.dark {
  svg {
    filter: none;
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
    transform: skew(16deg, 8deg);
  }
  50% {
    transform: skew(18deg, 10deg);
  }
  100% {
    transform: skew(22deg, 12deg);
  }
}

@keyframes flicker {
  1% {
    filter: none;
  }
  2% {
    filter: drop-shadow(0px 0px 50px rgb(253, 161, 255))
      drop-shadow(0px 0px 50px rgb(255, 255, 255));
  }
  3% {
    filter: none;
  }
  18% {
    filter: none;
  }
  20% {
    filter: drop-shadow(0px 60px 65px rgb(0, 255, 208))
      drop-shadow(0px -60px 65px rgb(229, 145, 255));
  }
  21% {
    filter: none;
  }
  29% {
    filter: none;
  }
  31% {
    filter: drop-shadow(0px -40px 75px rgb(0, 221, 255))
      drop-shadow(70px 50px 85px rgb(175, 255, 238))
      drop-shadow(-80px 90px 45px rgb(0, 255, 251))
      drop-shadow(0px 0px 50px rgb(253, 161, 255))
      drop-shadow(0px 0px 50px rgb(255, 255, 255))
      drop-shadow(-70px 40px 85px rgb(255, 255, 255))
      drop-shadow(-90px 20px 55px rgb(255, 251, 0));
  }
  35% {
    filter: none;
  }
  40% {
    filter: none;
  }
  42% {
    filter: drop-shadow(50px 0px 75px rgb(71, 182, 255))
      drop-shadow(0px -40px 85px rgb(0, 187, 181))
      drop-shadow(0px -40px 85px rgb(0, 187, 181))
      drop-shadow(0px -40px 85px rgb(0, 187, 181));
  }
  44% {
    filter: none;
  }
  55% {
    filter: none;
  }
  56% {
    filter: drop-shadow(-40px 20px 75px rgb(0, 187, 255))
      drop-shadow(10px 30px 85px rgb(0, 200, 255));
  }
  64% {
    filter: none;
  }
  71% {
    filter: none;
  }
  72% {
    filter: drop-shadow(0px -30px 75px rgb(0, 221, 255))
      drop-shadow(30px 35px 85px rgb(74, 255, 165))
      drop-shadow(-20px 40px 45px rgb(0, 255, 251))
      drop-shadow(-10px 40px 85px rgb(88, 255, 208))
      drop-shadow(0px 0px 50px rgb(253, 161, 255))
      drop-shadow(0px 0px 50px rgb(255, 255, 255))
      drop-shadow(-30px 20px 55px rgb(219, 153, 255));
  }
  75% {
    filter: none;
  }
  78% {
    filter: drop-shadow(0px -20px 75px rgb(0, 221, 255))
      drop-shadow(20px -20px 85px rgb(0, 170, 255))
      drop-shadow(20px 30px 45px rgb(0, 255, 251))
      drop-shadow(10px -10px 85px rgb(0, 255, 221))
      drop-shadow(20px 20px 55px rgb(255, 255, 255));
  }
  82% {
    filter: drop-shadow(50px 0px 75px rgb(0, 97, 161))
      drop-shadow(0px -40px 85px rgb(0, 187, 181))
      drop-shadow(0px -40px 25px rgb(0, 187, 181))
      drop-shadow(0px 30px 125px rgb(0, 187, 181));
  }
  85% {
    filter: none;
  }

  92% {
    filter: drop-shadow(-40px 20px 75px rgb(255, 0, 0))
      drop-shadow(0px 0px 50px rgb(253, 161, 255))
      drop-shadow(0px 0px 50px rgb(255, 255, 255))
      drop-shadow(10px 30px 85px rgb(0, 200, 255));
  }
  100% {
    filter: none;
  }
}

@media screen and (max-width: $bp_phone) {
  .spiral-container {
    display: none;
  }
}
</style>
