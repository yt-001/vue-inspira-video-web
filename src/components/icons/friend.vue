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
      d="M512 597.333333c-89.6 0-166.4-76.8-166.4-166.4s76.8-166.4 166.4-166.4 166.4 76.8 166.4 166.4-76.8 166.4-166.4 166.4z m0-281.6c-64 0-115.2 51.2-115.2 115.2s51.2 115.2 115.2 115.2 115.2-51.2 115.2-115.2-51.2-115.2-115.2-115.2z"
      fill="#FFFFFF"
    />
    <path
      d="M512 759.466667c-140.8 0-256-115.2-256-256s115.2-256 256-256 256 115.2 256 256-115.2 256-256 256z m0-460.8c-115.2 0-204.8 89.6-204.8 204.8s89.6 204.8 204.8 204.8 204.8-89.6 204.8-204.8-89.6-204.8-204.8-204.8z"
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
  'friend-icon',
  props.class
]);
</script>