<template>
  <div class="recommend-container">
    <Tags />
    <div class="video-grid">
      <!-- 视频卡片组件 -->
      <div 
        v-for="(video, index) in videoList" 
        :key="index" 
        class="video-card" 
        @mouseenter="handleMouseEnter(index)" 
        @mouseleave="handleMouseLeave(index)"
      >
        <div class="video-thumbnail-container" :class="{ 'hovered': hoveredVideo === index }">
          <!-- 视频封面图片 -->
          <img 
            :src="video.coverUrl" 
            class="video-thumbnail" 
            :class="{ 'zoomed': hoveredVideo === index }" 
            alt="视频封面"
          />
          
          <!-- 视频预览 (鼠标悬停时显示) -->
          <video 
            v-if="hoveredVideo === index" 
            :ref="el => { videoRefs[index] = el as HTMLVideoElement; }" 
            class="preview-video" 
            :src="video.videoUrl" 
            muted 
            loop
          ></video>
          
          <!-- 视频信息 (鼠标悬停时隐藏) -->
          <div class="video-stats" :class="{ 'hidden': hoveredVideo === index }">
            <span class="video-duration">{{ video.duration }}</span>
            <div class="video-metrics">
              <span class="play-count"><i class="play-icon"></i>{{ formatCount(video.playCount) }}</span>
              <span class="comment-count"><i class="comment-icon"></i>{{ formatCount(video.commentCount) }}</span>
            </div>
          </div>
          
          <!-- 稍后再看按钮 (鼠标悬停时显示) -->
          <div 
            v-if="hoveredVideo === index" 
            class="watch-later-btn"
            @mouseenter="showWatchLaterTooltip[index] = true"
            @mouseleave="showWatchLaterTooltip[index] = false"
          >
            <i class="watch-later-icon"></i>
            <div v-if="showWatchLaterTooltip[index]" class="tooltip">稍后再看</div>
          </div>
        </div>
        
        <!-- 视频标题和作者信息 (不随鼠标悬停变化) -->
        <div class="video-info">
          <div class="video-title">{{ video.title }}</div>
          <div class="video-author">{{ video.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tags from '@/components/Tags.vue';
import { ref, reactive, onMounted } from 'vue';

/**
 * 视频数据接口
 */
interface VideoData {
  id: number;
  title: string;
  author: string;
  coverUrl: string;
  videoUrl: string;
  duration: string;
  playCount: number;
  commentCount: number;
}

/**
 * 当前悬停的视频索引
 */
const hoveredVideo = ref<number | null>(null);

/**
 * 是否显示稍后再看提示
 */
const showWatchLaterTooltip = ref<Record<number, boolean>>({});

/**
 * 视频元素引用映射表
 */
const videoRefs = reactive<Record<number, HTMLVideoElement>>({});

/**
 * 模拟视频数据
 */
const videoList = ref<VideoData[]>([
  {
    id: 1,
    title: 'Vue 3 新特性详解与实战应用',
    author: '前端开发者',
    coverUrl: 'https://picsum.photos/id/1/320/180',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '12:34',
    playCount: 12500,
    commentCount: 342
  },
  {
    id: 2,
    title: 'TypeScript高级技巧分享',
    author: 'TS爱好者',
    coverUrl: 'https://picsum.photos/id/2/320/180',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '08:21',
    playCount: 8700,
    commentCount: 156
  },
  {
    id: 3,
    title: '响应式布局最佳实践',
    author: 'UI设计师',
    coverUrl: 'https://picsum.photos/id/3/320/180',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '15:45',
    playCount: 23400,
    commentCount: 521
  },
  {
    id: 4,
    title: 'CSS动画高级教程',
    author: '动效大师',
    coverUrl: 'https://picsum.photos/id/4/320/180',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '10:12',
    playCount: 15800,
    commentCount: 278
  },
  {
    id: 5,
    title: 'JavaScript性能优化指南',
    author: 'JS专家',
    coverUrl: 'https://picsum.photos/id/5/320/180',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '18:33',
    playCount: 32100,
    commentCount: 645
  },
  {
    id: 6,
    title: 'Web安全防护实战Web安全防护实战Web安全防护实战Web安全防护实战Web安全防护实战Web安全防护实战Web安全防护实战Web安全防护实战',
    author: '安全工程师',
    coverUrl: 'https://picsum.photos/id/6/320/180',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '22:17',
    playCount: 9600,
    commentCount: 187
  },
  {
    id: 7,
    title: '前端工程化最佳实践',
    author: '架构师',
    coverUrl: 'https://picsum.photos/id/7/320/180',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '14:28',
    playCount: 18300,
    commentCount: 412
  },
  {
    id: 8,
    title: 'WebGL 3D渲染入门',
    author: '图形开发者',
    coverUrl: 'https://picsum.photos/id/8/320/180',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    duration: '20:05',
    playCount: 7400,
    commentCount: 98
  }
]);

/**
 * 处理鼠标进入视频卡片事件
 * @param index 视频索引
 */
const handleMouseEnter = (index: number) => {
  hoveredVideo.value = index;
  
  // 延迟一帧后播放视频，确保DOM已更新
  setTimeout(() => {
    const videoElement = videoRefs[index];
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play();
    }
  }, 0);
};

/**
 * 处理鼠标离开视频卡片事件
 * @param index 视频索引
 */
const handleMouseLeave = (index: number) => {
  hoveredVideo.value = null;
  
  // 暂停并重置视频
  const videoElement = videoRefs[index];
  if (videoElement) {
    videoElement.pause();
    videoElement.currentTime = 0;
  }
};

/**
 * 格式化数字为带单位的字符串
 * @param count 数字
 * @returns 格式化后的字符串
 */
const formatCount = (count: number): string => {
  if (count >= 10000) {
    return (count / 10000).toFixed(1) + '万';
  }
  return count.toString();
};
</script>

<style scoped>
.recommend-container {
  max-width: 1170px;
  margin: 0 auto;
  /* 隐藏滚动条但保持可滚动 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
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

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.video-card {
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-background);
  transition: transform 0.3s ease;
  cursor: pointer;
  /* 确保视频卡片不受容器透明度影响 */
  position: relative;
  z-index: 1;
  backdrop-filter: none;
  background-color: rgb(255, 255, 255);
}

.dark .video-card {
  background-color: rgba(140, 148, 194, 1);
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.video-thumbnail-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 宽高比 */
  overflow: hidden;
  background-color: #000;
}

.video-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.video-thumbnail.zoomed {
  transform: scale(1.1);
  opacity: 0;
}

.preview-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.video-stats {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  color: white;
  font-size: 12px;
  transition: opacity 0.3s ease;
}

.video-stats.hidden {
  opacity: 0;
}

.video-duration {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 4px;
  border-radius: 5px;
}

.video-metrics {
  display: flex;
  gap: 8px;
}

.play-icon, .comment-icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 2px;
  background-color: #fff;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}

.play-icon {
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>');
}

.comment-icon {
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg>');
}

.watch-later-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
  z-index: 10;
}

.watch-later-icon {
  display: block;
  width: 18px;
  height: 18px;
  background-color: #fff;
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
}

.tooltip {
  position: absolute;
  top: -30px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
}

.tooltip:after {
  content: '';
  position: absolute;
  bottom: -5px;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid rgba(0, 0, 0, 0.5);
}

.video-info {
  background-color: #414350;
  padding: 8px;
}

.dark .video-info {
  background-color: #ffffff;
}

.video-title {
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 6px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-author {
  font-size: 12px;
  color: #f0f0f0;
}

.dark .video-author {
  color: #414350;
}
</style>