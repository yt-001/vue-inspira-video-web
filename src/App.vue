<template>
  <div class="flex main-backgroud">
    <!-- 左侧菜单栏 -->
    <div class="w-64 bg-background border-r border-border p-4 rounded-lg flex flex-col justify-between">
      <div class="flex flex-col gap-4">
        <HoverButton text="首页" class="w-full" :icon="HouseIcon" iconColor="#635DF7" />
        <HoverButton text="视频" class="w-full" :icon="VideoIcon" iconColor="#FF6B6B" />
        <HoverButton text="收藏" class="w-full" :icon="LikeIcon" iconColor="#4CAF50" />
      </div>
      <div class="flex flex-col gap-4">
        <HoverButton text="设置" class="w-full" :icon="PersonalIcon" iconColor="#9C27B0" />
        <HoverButton text="疑问" class="w-full" :icon="MessageIcon" iconColor="#2196F3" />
      </div>
    </div>
    <!-- 主内容区域 -->
    <div class="flex-1 relative h-screen w-full bg-background text-foreground">
      <ParticlesBg
      class="absolute inset-0"
      :quantity="100"
      :ease="100"
      :color="isDark ? '#000' : '#FFF'"
      :staticity="10"
      refresh
      />
      <!-- 顶部导航栏 -->
      <div class="flex h-16 items-center justify-center border-b border-border px-6 gap-4">
        <VanishingInput v-model="text" :placeholders="placeholders" />
        <HoverButton text="登录" style="border: 0;"/>
        <ThemeToggle />
      </div>
      <!-- 内容区域 -->
      <div class="p-6">
        带哦我就地哦啊大家哦啊玩i解答完i哦较大
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HoverButton from './components/HoverButton.vue'
import { ref, watch } from 'vue'
import VanishingInput from './components/VanishingInput.vue';
import HouseIcon from './components/icons/house.vue';
import VideoIcon from './components/icons/video.vue';
import LikeIcon from './components/icons/like.vue';
import PersonalIcon from './components/icons/personal.vue';
import MessageIcon from './components/icons/message.vue';
import ParticlesBg from './components/ParticlesBg.vue';
import { useColorMode } from '@vueuse/core';
import ThemeToggle from './components/ThemeToggle.vue';

const colorMode = useColorMode();
const isDark = ref(colorMode.value === 'dark');

watch(colorMode, (newValue) => {
  isDark.value = newValue === 'dark';
  document.documentElement.classList.toggle('dark', isDark.value);
}
);

const placeholders = [
  "Why is my code always broken?",
  "What does 'undefined' even mean?",
  "How to center a div (for real this time)",
  "Am I smarter than a compiler?",
  "Do loops ever get dizzy?",
];

const text = ref("");

</script>

<style>
.flex {
  display: flex;
}
.h-screen {
  height: 100vh;
}
.w-full {
  width: 100%;
}
.w-64 {
  width: 16rem;
}
.bg-background {
  background-color: #161823;
}
.dark .bg-background {
  background-color: #8c94c2;
}
.main-backgroud{
  background-color: #161823;
}
.dark .main-backgroud{
  background-color: #ffffff;
}
.border-r {
  border-right: 1px solid #ccc;
}
.border-border {
  border-color: #ccc;
}
.p-4 {
  padding: 1rem;
}
.rounded-lg {
  border-radius: 1.5rem;
}
.flex-col {
  flex-direction: column;
}
.justify-between {
  justify-content: space-between;
}
.gap-4 {
  gap: 1rem;
}
.flex-1 {
  flex: 1;
}
.h-16 {
  height: 4rem;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.border-b {
  border-bottom: 1px solid #ccc;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.p-6 {
  padding: 1.5rem;
}
.bg-primary {
    background-color: rgb(59 130 246 / 0.5);
}
</style>