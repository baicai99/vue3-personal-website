<template>
  <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4 wow fadeInUp" :data-wow-duration="wowDuration"
    :data-wow-delay="wowDelay">
    <div class="card shadow-sm">
      <a :href="item.url"> <!-- 将图片包裹在a标签内 -->
        <img :src="item.imgrul" alt="">
      </a>
      <div class="card-body">
        <p class="card-text">{{ item.title }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a class="btn btn-sm btn-outline-success" :href="item.url">查看</a>
          </div>
          <small class="text-muted">查看 {{ item.count }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    item: Object,
    index: Number,
  },
  computed: {
    wowDuration() {
      // 计算data-wow-duration
      return `${1.3 + this.index * 0.2}s`;
    },
    wowDelay() {
      // 计算data-wow-delay
      return `${0.2 * this.index}s`;
    },
  },
};
</script>
  
<style scoped>
/* 这里添加 Card 组件的样式 */
img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  background-color: #eeeded;
}
</style>
  