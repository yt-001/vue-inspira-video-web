<template>
  <div class="tags-container" ref="containerRef">
    <button class="nav-button prev" :disabled="currentIndex === 0" @click="prevTag">
      <i class="arrow-icon left"></i>
    </button>
    <div class="tag-display" ref="tagDisplayRef">
      <div class="tag-list" :style="{ transform: `translateX(-${currentIndex * 100}px)` }" ref="tagListRef">
        <button 
          v-for="(tag, index) in tags" 
          :key="index"
          class="tag-item"
          :class="{ active: activeTag === index }"
          @click="selectTag(index)"
        >
          {{ tag }}
        </button>
      </div>
    </div>
    <button class="nav-button next" :disabled="isLastTagVisible" @click="nextTag">
      <i class="arrow-icon right"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

/**
 * 标签列表数据
 */
const tags = ref<string[]>(['全部', '游戏', '二次元', '音乐', '美食', '知识', '体育', '小剧场', '影视', '生活vlog', '亲子', '汽车', '三农', '动物', '旅行']);

/**
 * DOM引用
 */
const containerRef = ref<HTMLElement | null>(null);
const tagDisplayRef = ref<HTMLElement | null>(null);
const tagListRef = ref<HTMLElement | null>(null);

/**
 * 当前选中的标签索引
 */
const activeTag = ref<number>(0);

/**
 * 每次滚动的标签数量
 */
const SCROLL_STEP = 1;

/**
 * 当前显示的标签索引
 */
const currentIndex = ref<number>(0);

/**
 * 计算最后一个标签是否可见
 */
const isLastTagVisible = computed(() => {
  if (!tagDisplayRef.value || !tagListRef.value) return false;
  const displayWidth = tagDisplayRef.value.clientWidth;
  const listWidth = tagListRef.value.scrollWidth;
  const currentOffset = currentIndex.value * 100;
  return listWidth - currentOffset <= displayWidth;
});

/**
 * 处理标签选择
 * @param index 标签索引
 */
const selectTag = (index: number) => {
  activeTag.value = index;
};

/**
 * 切换到上一组标签
 */
const prevTag = () => {
  if (currentIndex.value > 0) {
    currentIndex.value = Math.max(0, currentIndex.value - SCROLL_STEP);
  }
};

/**
 * 切换到下一组标签
 */
const nextTag = () => {
  const maxIndex = tags.value.length - 1;
  if (currentIndex.value < maxIndex && !isLastTagVisible.value) {
    currentIndex.value = Math.min(maxIndex, currentIndex.value + SCROLL_STEP);
  }
};

/**
 * 组件挂载后初始化
 */
onMounted(() => {
  // 初始化时检查最后一个标签是否可见
  if (isLastTagVisible.value) {
    currentIndex.value = 0;
  }
});
</script>

<style scoped>
.tags-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 8px;
  max-width: 100%;
  padding: 0 8px;
}

.tag-display {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.tag-list {
  display: flex;
  gap: 12px;
  transition: transform 0.3s ease;
  white-space: nowrap;
}

.tag-item {
  padding: 8px 20px;
  font-size: 14px;
  color: #f0f0f0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
  position: relative;
}

.dark .tag-item {
  color: #000000;
}

.tag-item:hover {
  color: #fe2c55;
}

.tag-item.active {
  color: #fe2c55;
  font-weight: 600;
}

.tag-item.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background-color: #fe2c55;
  border-radius: 2px;
}

.nav-button {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #f0f0f0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.dark .nav-button {
  background-color: #ffffff;
}

.nav-button:hover {
  background-color: #fafafa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  background-color: #f5f5f5;
  box-shadow: none;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  position: relative;
}

.arrow-icon.left::before,
.arrow-icon.right::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-top: 2px solid #666;
  border-right: 2px solid #666;
  top: 50%;
  left: 50%;
}

.arrow-icon.left::before {
  transform: translate(-25%, -50%) rotate(-135deg);
}

.arrow-icon.right::before {
  transform: translate(-75%, -50%) rotate(45deg);
}
</style>