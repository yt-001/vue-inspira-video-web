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
      d="M512 563.2c-89.6 0-166.4-76.8-166.4-166.4s76.8-166.4 166.4-166.4 166.4 76.8 166.4 166.4-76.8 166.4-166.4 166.4z m0-281.6c-64 0-115.2 51.2-115.2 115.2s51.2 115.2 115.2 115.2 115.2-51.2 115.2-115.2-51.2-115.2-115.2-115.2z"
      fill="#FFFFFF"
    />
    <path
      d="M768 793.6H256c-28.16 0-51.2-23.04-51.2-51.2 0-169.984 138.24-307.2 307.2-307.2s307.2 138.24 307.2 307.2c0 28.16-23.04 51.2-51.2 51.2z m-460.8-51.2h409.6c-15.36-127.488-123.904-204.8-204.8-204.8s-189.44 77.312-204.8 204.8z"
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
  'personal-icon',
  props.class
]);
</script>