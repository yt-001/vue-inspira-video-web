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
      d="M768 307.2H256c-28.16 0-51.2 23.04-51.2 51.2v307.2c0 28.16 23.04 51.2 51.2 51.2h512c28.16 0 51.2-23.04 51.2-51.2V358.4c0-28.16-23.04-51.2-51.2-51.2z m0 358.4H256V358.4h512v307.2z m-153.6-204.8l-153.6 102.4V409.6l153.6 102.4v-51.2z"
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
  'video-icon',
  props.class
]);
</script>