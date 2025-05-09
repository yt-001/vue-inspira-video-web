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
      d="M768 409.6v204.8c0 28.16-23.04 51.2-51.2 51.2h-51.2v51.2c0 28.16-23.04 51.2-51.2 51.2H409.6c-28.16 0-51.2-23.04-51.2-51.2v-51.2h-51.2c-28.16 0-51.2-23.04-51.2-51.2V409.6c0-28.16 23.04-51.2 51.2-51.2h51.2v-51.2c0-28.16 23.04-51.2 51.2-51.2h204.8c28.16 0 51.2 23.04 51.2 51.2v51.2h51.2c28.16 0 51.2 23.04 51.2 51.2z m-102.4 204.8V409.6H358.4v204.8h307.2z m-51.2-256v-51.2H409.6v51.2h204.8z m0 307.2v-51.2H409.6v51.2h204.8z"
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
  'notice-icon',
  props.class
]);
</script>