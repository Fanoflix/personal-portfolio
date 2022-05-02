<template>
  <div id="logo">
    <svg viewBox="0 0 314.4 187.2">
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
        id="base"
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

// const baseInitial =
//   "M133.1,133.2l-13,14.2,6.9-18.3L80,2.4l-5.9,18s-7.9,16.7,3.5,6.3c4.7-4.4,2.3-5.2,1.8-9.6,11.6,14.3-3.2,21-3.2,21C67.6,41.9,62,46.3,50.7,78.6l-19.3,52h0l-.3,11.9,23.8,22.5,3.9-3.2L48.1,147.9l13.3-43.4,30.3-5.3L70,92.6,64.5,96,77.9,51.9l36.7,100.2-7.3,8.9,3.9,4.3,27.5-23.7Z";
// const baseFinal =
//   "M133.1,133.2l-13,14.2,6.9-18.3L80,2.4l-5.9,18s-7.9,16.7,3.5,6.3c4.7-4.4,2.3-5.2,1.8-9.6,11.6,14.3-3.2,21-3.2,21C67.6,41.9,62,46.3,50.7,78.6l-19.3,52h0l-.3,11.9,23.8,22.5,3.9-3.2L48.1,147.9l13.3-43.4,30.3-5.3L70,92.6,64.5,96,77.9,51.9l36.7,100.2-7.3,8.9,3.9,4.3,27.5-23.7Z";

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

const logoAnimDuration = 500;
const logoLoop = false;

const spikeLTimeline = anime.timeline({
  easing: "easeOutBounce",
});
const spikeRTimeLine = anime.timeline({
  easing: "easeOutBounce",
});

function morphLogoForward() {
  spikeRTimeLine.add({
    targets: "#right_top_spike",
    points: [rightTopSpikeInitial, rightTopSpikeFinal],
    duration: logoAnimDuration,
    loop: logoLoop,
  });

  spikeRTimeLine.add({
    targets: "#right_bot_spike",
    points: [rightBotSpikeInitial, rightBotSpikeFinal],
    duration: logoAnimDuration,
    loop: logoLoop,
  });

  spikeLTimeline.add({
    targets: "#left_top_spike",
    points: [leftTopSpikeInitial, leftTopSpikeFinal],
    duration: logoAnimDuration,
    loop: logoLoop,
  });

  spikeLTimeline.add({
    targets: "#left_bot_spike",
    points: [leftBotSpikeInitial, leftBotSpikeFinal],
    duration: logoAnimDuration,
    loop: logoLoop,
  });
}
</script>

<style scoped lang="scss">
.cls-1 {
  fill: #fff;
}
</style>
