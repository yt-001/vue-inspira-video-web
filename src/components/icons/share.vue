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
      d="M665.6 409.6c-28.16 0-51.2 23.04-51.2 51.2v204.8H409.6V460.8c0-28.16-23.04-51.2-51.2-51.2s-51.2 23.04-51.2 51.2v256c0 28.16 23.04 51.2 51.2 51.2h307.2c28.16 0 51.2-23.04 51.2-51.2V460.8c0-28.16-23.04-51.2-51.2-51.2z"
      fill="#FFFFFF"
    />
    <path
      d="M512 256c-28.16 0-51.2 23.04-51.2 51.2v307.2c0 28.16 23.04 51.2 51.2 51.2s51.2-23.04 51.2-51.2V307.2c0-28.16-23.04-51.2-51.2-51.2z"
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
  'share-icon',
  props.class
]);
</script>