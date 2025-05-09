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
      d="M716.8 628.224c-12.8-76.8-38.4-140.8-76.8-192 0-2.56 0-5.12 0-7.68 0-171.52-57.344-309.76-128-309.76s-128 138.24-128 309.76c0 2.56 0 5.12 0 7.68-38.4 51.2-64 115.2-76.8 192-17.92 110.08-12.8 153.6-7.68 156.16 10.24 5.12 40.96-71.68 40.96-71.68 0 35.84 17.92 81.92 56.32 115.2-17.92 5.12-58.88 20.48-48.64 35.84 7.68 12.8 133.12 7.68 168.96 3.84 35.84 3.84 161.28 8.96 168.96-3.84 10.24-15.36-30.72-30.72-48.64-35.84 38.4-33.28 56.32-79.36 56.32-115.2 0 0 30.72 76.8 40.96 71.68 5.12-2.56 10.24-46.08-7.68-156.16z"
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
  'qq-icon',
  props.class
]);
</script>