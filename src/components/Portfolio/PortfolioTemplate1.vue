<template>
  <div class="mt-3 mb-3 pl-3">
    <h1 class="wow fadeInUp" :data-wow-duration="'1.3s'" :data-wow-delay="'0.4s'">模特换脸</h1>
    <a href="../index.html" class="wow fadeInUp btn btn-lg btn-outline-success" :data-wow-duration="'1.3s'"
      :data-wow-delay="'0.6s'" role="button">回到主页</a>
    <a href="../portfolio.html" class="wow fadeInUp btn btn-lg btn-outline-success ml-2" :data-wow-duration="'1.3s'"
      :data-wow-delay="'0.8s'" role="button">回到作品集</a>
  </div>
  <div class="ml-3 mr-3 wow fadeInUp" :data-wow-duration="'1.7s'" :data-wow-delay="'1s'">
    <img v-for="index in 8" :key="'image-' + index" :src="`/images/portfolioinfo1/${index}.png`" loading="lazy"
      style="width: 100%">
  </div>
  <indexFooter></indexFooter>
</template>
  
<script>
import WOW from 'wow.js';
// 导入indexFooter
import indexFooter from './indexFooter.vue';
export default {
  name: 'PortfolioPage',
  components: {
    indexFooter,
  },
  mounted() {
    this.initWow();
  },
  methods: {
    initWow() {
      new WOW().init();
    }
  }
}
</script>
  
<style scoped>
@media (hover: hover) and (pointer: fine) {
  .button:hover {
    background-color: #0056b3;
  }
}
</style>
  
<style></style>
  