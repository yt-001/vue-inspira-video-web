<template>
  <button
    @click="toggleTheme"
    class="relative size-10 rounded-full bg-background border border-border p-2 transition-colors hover:bg-muted"
    :title="isDark ? '切换到亮色模式' : '切换到暗色模式'"
  >
    <div
      class="relative size-full"
    >
      <!-- 太阳图标 -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute inset-0 size-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>

      <!-- 月亮图标 -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute inset-0 size-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useColorMode } from '@vueuse/core';

// 使用 useColorMode 切换主题状态，并更新 isDark 的值
const colorMode = useColorMode();
const isDark = ref(colorMode.value === 'dark');

// 切换主题函数
// 该函数通过更改 colorMode 的值来切换主题状态
// 并根据新的主题状态更新 isDark 的值
const toggleTheme = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
  isDark.value = colorMode.value === 'dark';
};
</script>