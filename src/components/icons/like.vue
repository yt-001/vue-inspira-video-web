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
      d="M710.4 329.216c-36.352-35.84-85.504-55.296-135.68-55.296-43.008 0-83.968 14.336-117.248 40.96-33.28-26.624-74.24-40.96-117.248-40.96-50.176 0-99.328 19.456-135.68 55.296-74.752 73.728-74.752 193.536 0 267.264l226.816 223.744c7.168 7.168 16.384 10.752 25.6 10.752s18.432-3.584 25.6-10.752l226.816-223.744c37.376-36.864 57.856-85.504 57.856-133.632s-20.48-96.768-56.832-133.632z"
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
  'like-icon',
  props.class
]);
</script>