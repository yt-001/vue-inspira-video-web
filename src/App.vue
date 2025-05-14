<template>
  <div class="flex main-backgroud">
    <!-- 左侧菜单栏 -->
    <div class="w-64 bg-background text-foreground border-r border-border p-4 rounded-lg flex flex-col justify-between">
      <div class="flex flex-col gap-4">
        <router-link to="/selected">
          <HoverButton text="精选" class="w-full text-color hoverbuttoncolor" :icon="HouseIcon" />
        </router-link>
        <router-link to="/recommend">
          <HoverButton text="推荐" class="w-full text-color hoverbuttoncolor" :icon="VideoIcon" iconColor="#FF6B6B" />
        </router-link>
        <router-link to="/favorite">
          <HoverButton text="收藏" class="w-full text-color hoverbuttoncolor" :icon="LikeIcon" iconColor="#4CAF50" />
        </router-link>
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
        <HoverButton text="登录" class="text-color hoverbuttoncolor"/>
        <ThemeToggle />
      </div>
      <!-- 内容区域 - 固定大小且半透明的视图容器 -->
      <div class="view-container p-6 bg-background/70 backdrop-blur-md rounded-lg m-4 overflow-auto">
        <router-view v-slot="{ Component }">
          <transition
            mode="out-in"
            @before-leave="startTransition"
            @after-enter="endTransition"
          >
            <template v-if="!isLoading">
              <component :is="Component" />
            </template>
            <LoadingBalls :size="0.8" v-else />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HoverButton from './components/HoverButton.vue'
import { ref, watch, onUnmounted } from 'vue'
import VanishingInput from './components/VanishingInput.vue';
import LoadingBalls from './components/LoadingBalls.vue';
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

// 路由过渡状态管理
const isLoading = ref(false);
let transitionTimeout: number | null = null;

// 清理定时器
const clearTransitionTimer = () => {
  if (transitionTimeout) {
    clearTimeout(transitionTimeout);
    transitionTimeout = null;
  }
};

// 开始过渡动画
const startTransition = () => {
  clearTransitionTimer();
  isLoading.value = true;
};

// 结束过渡动画
const endTransition = () => {
  clearTransitionTimer();
  // 设置较短的动画持续时间
  transitionTimeout = window.setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};

// 在组件卸载时清理定时器
onUnmounted(() => {
  clearTransitionTimer();
});

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
  width: 12rem;
}
.bg-background {
  background-color: #282a36;
  border-color: #545768;
}
.dark .bg-background {
  background-color: #f0f0f0;
  border-color: #ccc;
}
.main-backgroud{
  background-color: #414350;
}
.dark .main-backgroud{
  background-color: #ffffff;
}

/* 视图容器样式 - 固定大小且半透明 */
.view-container {
  height: calc(100vh - 6rem); /* 固定高度，减去顶部导航栏高度和边距 */
  margin-left: 30px;
  background-color: rgba(40, 42, 54, 0.7);
  backdrop-filter: blur(8px);
  transition: background-color 0.3s ease;
}
.dark .view-container {
  background-color: rgba(240, 240, 240, 0.7);
}
.border-r {
  border-right: 1px solid #545768;
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
.text-foreground {
    color: #ccc;
}
.dark .text-foreground {
    color: #000;
}

</style>