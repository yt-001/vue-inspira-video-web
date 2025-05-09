<template>
  <svg
    :width="size"
    :height="size"
    :class="classes"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
      :fill="color"
    />
    <path
      d="M577.536 768V544h75.776l11.264-87.808h-87.04v-56.064c0-25.408 7.04-42.752 43.52-42.752h46.272V277.76c-8.064-1.024-35.584-3.328-67.584-3.328-66.816 0-112.512 40.832-112.512 115.712v64.512h-75.52V544h75.52v224h90.304z"
      fill="#FFFFFF"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  /** 图标大小 */
  size?: number | string;
  /** 主要颜色 */
  color?: string;
  /** 自定义类名 */
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  color: '#A5ADF6',
});

const classes = computed(() => [
  'inspira-icon',
  'facebook-icon',
  props.class
]);
</script>