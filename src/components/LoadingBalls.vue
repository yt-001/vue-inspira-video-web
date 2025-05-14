<template>
  <div class="loading-container">
    <div class="loading three-balls-bounce" :style="containerStyle">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'LoadingBalls',
  props: {
    size: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const containerStyle = computed(() => ({
      transform: `scale(${props.size})`,
      transformOrigin: 'center center'
    }))

    return {
      containerStyle
    }
  }
})
</script>

<style scoped>
.loading-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.three-balls-bounce {
  position: relative;
  width: 200px;
  height: 62px;
}

.three-balls-bounce .circle {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #ff4a69;
  left: 15%;
  transform-origin: 50%;
  animation: bounce 0.5s alternate infinite ease;
}

.three-balls-bounce .circle:nth-child(2) {
  left: 45%;
  animation-delay: 0.2s;
}

.three-balls-bounce .circle:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: 0.3s;
}

.three-balls-bounce .shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow 0.5s alternate infinite ease;
}

.three-balls-bounce .shadow:nth-child(4) {
  left: 45%;
  animation-delay: 0.2s;
}

.three-balls-bounce .shadow:nth-child(5) {
  right: 15%;
  left: auto;
  animation-delay: 0.3s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-60px);
  }
}

@keyframes shadow {
  0% {
    transform: scaleX(1.5);
  }
  40% {
    transform: scaleX(1);
    opacity: 0.7;
  }
  100% {
    transform: scaleX(0.2);
    opacity: 0.4;
  }
}
</style>