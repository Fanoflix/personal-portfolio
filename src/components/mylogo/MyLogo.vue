<template>
  <div id="logo">
    <svg id="base" :class="{ dark: isDark }" viewBox="0 0 300 180">
      <polygon
        id="ripple_right"
        class="ripple"
        points="153.6 123.7 93.9 15.4 140.8 118.8 82 185.3"
      />
      <polygon
        id="ripple_left"
        data-name="ripple left"
        class="ripple"
        points="13.2 110.8 41.1 51.1 0 113.5 75.7 185.3"
      />
      <polygon
        id="left_top_spike"
        class="cls-1"
        points="13.2 110.8 5.3 112.2 0 113.5 27.9 140 28.1 128.1 13.2 110.8"
      />
      <polygon
        id="right_bot_spike"
        class="cls-1"
        points="106.3 161.1 108 162.9 104 158.7 106.3 161.1"
      />
      <polygon
        id="left_bot_spike"
        class="cls-1"
        points="53.8 160.8 55.6 159.4 51.7 162.5 53.8 160.8"
      />
      <path
        id="center_piece"
        class="cls-1"
        d="M133.1,133.2l-13,14.2,6.9-18.3L80,2.4l-5.9,18s-7.9,16.7,3.5,6.3c4.7-4.4,2.3-5.2,1.8-9.6,11.6,14.3-3.2,21-3.2,21C67.6,41.9,62,46.3,50.7,78.6l-19.3,52h0l-.3,11.9,23.8,22.5,3.9-3.2L48.1,147.9l13.3-43.4,30.3-5.3L70,92.6,64.5,96,77.9,51.9l36.7,100.2-7.3,8.9,3.9,4.3,27.5-23.7Z"
        transform="translate(-3.2 -2.4)"
      />
      <polygon
        id="right_top_spike"
        class="cls-1"
        points="147 121.2 140.8 118.8 129.8 130.8 135.5 139.3 153.6 123.7 147 121.2"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import anime from "animejs";
import { useThemeStore } from "@/stores/theme";
import { storeToRefs } from "pinia";
import { onMounted, onUnmounted } from "vue";
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);

const leftTopSpikeInitial =
  "13.2 110.8 5.3 112.2 0 113.5 27.9 140 28.1 128.1 13.2 110.8";
const leftTopSpikeFinal =
  "13.2 110.8 41.1 51.1 0 113.5 27.9 140 28.1 128.1 13.2 110.8";

const leftBotSpikeInitial = "53.8 160.8 55.6 159.4 51.7 162.5 53.8 160.8";
const leftBotSpikeFinal = "75.7 185.3 55.6 159.4 51.7 162.5 75.7 185.3";

const rightTopSpikeInitial =
  "147 121.2 140.8 118.8 129.8 130.8 135.5 139.3 153.6 123.7 147 121.2";
const rightTopSpikeFinal =
  "93.9 15.4 140.8 118.8 129.8 130.8 135.5 139.3 153.6 123.7 93.9 15.4";

const rightBotSpikeInitial = "106.3 161.1 108 162.9 104 158.7 106.3 161.1";
const rightBotSpikeFinal = "82 185.3 108 162.9 104 158.7 82 185.3";

const easing = "easeOutInBack";
const logoAnimDuration = 650;
const logoLoop = false;
const delay = 150;

const rippleDuration = 550;
const rippleEasing = "easeOutExpo";
const rippleDistance = 60;
const rippleOffsetDelay = 0;
const rippleOpacity = [1, 0.25];

const rippleBackDuration = rippleDuration / 2;
const rippleBackEasing = "easeInOutBack";
const rippleBackOffset = 450;
const rippleBackOpacity = [0.25, 1];

const spikeLTopTimeline = anime.timeline({
  easing: easing,
  delay: delay,
});
const spikeLBotTimeline = anime.timeline({
  easing: easing,
  delay: delay,
});
const spikeRTopTimeLine = anime.timeline({
  easing: easing,
  delay: delay,
});
const spikeRBotTimeLine = anime.timeline({
  easing: easing,
  delay: delay,
});
const base = anime.timeline({
  easing: easing,
});

onMounted(() => {
  morphLogoForward();
});

function morphLogoForward() {
  base.add({
    targets: "#base",
    translateY: [1, -7, 0],
    opacity: [0, 1],
    scaleY: [0, 3, 1],

    duration: 250,
    easing: "easeInSine",
    delay: 50,
  });

  // Top + Ripple

  spikeRTopTimeLine
    .add({
      targets: "#right_top_spike",
      points: [rightTopSpikeInitial, rightTopSpikeFinal],
      duration: logoAnimDuration,
      loop: logoLoop,
    })
    .add(
      {
        targets: "#ripple_left",
        translateX: [0, -rippleDistance],

        opacity: rippleOpacity,
        duration: rippleDuration,
        easing: rippleEasing,
      },
      rippleOffsetDelay
    )
    .add(
      {
        targets: "#ripple_left",
        translateX: [-rippleDistance, 0],

        opacity: rippleBackOpacity,
        duration: rippleBackDuration,
        easing: rippleBackEasing,
      },
      rippleBackOffset
    );

  spikeLTopTimeline
    .add({
      targets: "#left_top_spike",
      points: [leftTopSpikeInitial, leftTopSpikeFinal],
      duration: logoAnimDuration,
      loop: logoLoop,
    })
    .add(
      {
        targets: "#ripple_right",
        translateX: [0, rippleDistance],

        opacity: rippleOpacity,
        duration: rippleDuration,
        easing: rippleEasing,
      },
      rippleOffsetDelay
    )
    .add(
      {
        targets: "#ripple_right",
        translateX: [rippleDistance, 0],

        opacity: rippleBackOpacity,
        duration: rippleBackDuration,
        easing: rippleBackEasing,
      },
      rippleBackOffset
    );

  // Bot
  spikeRBotTimeLine.add({
    targets: "#right_bot_spike",
    points: [rightBotSpikeInitial, rightBotSpikeFinal],
    duration: logoAnimDuration,
    loop: logoLoop,
  });

  spikeLBotTimeline.add({
    targets: "#left_bot_spike",
    points: [leftBotSpikeInitial, leftBotSpikeFinal],
    duration: logoAnimDuration,
    loop: logoLoop,
  });
}
</script>

<style scoped lang="scss">
#logo {
  width: 100px;
  z-index: 100;
  overflow: visible;

  margin: auto;
}

svg {
  overflow: visible;
}

.cls-1 {
  fill: black;
}

.ripple {
  fill: rgb(107, 107, 107);
}
.dark {
  .cls-1 {
    fill: #fff;
  }

  #center_piece {
    filter: drop-shadow(0px 0px 35px rgba(255, 255, 255, 0.5));
  }

  .ripple {
    fill: rgb(142, 142, 142);
  }
}
</style>
