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
      d="M665.6 307.2l-256 76.8v332.8c-14.336-10.24-30.72-15.36-51.2-15.36-51.2 0-92.16 40.96-92.16 92.16s40.96 92.16 92.16 92.16 92.16-40.96 92.16-92.16V486.4l204.8-61.44v189.44c-14.336-10.24-30.72-15.36-51.2-15.36-51.2 0-92.16 40.96-92.16 92.16s40.96 92.16 92.16 92.16 92.16-40.96 92.16-92.16V332.8c0-15.36-10.24-25.6-20.48-25.6z"
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
  'music-icon',
  props.class
]);
</script>