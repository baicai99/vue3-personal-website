<template>

  <!-- 导航栏开始 -->
  <div class="mt-3 mb-3 pl-3">
    <h1 class="wow fadeInUp" :data-wow-duration="'1.3s'" :data-wow-delay="'0.4s'">{{ title }}</h1>
    <router-link to="/" class="wow fadeInUp btn btn-lg btn-outline-success" :data-wow-duration="'1.3s'"
      :data-wow-delay="'0.6s'" role="button">回到主页</router-link>
    <router-link to="/" class="wow fadeInUp btn btn-lg btn-outline-success ml-4" :data-wow-duration="'1.3s'"
      :data-wow-delay="'0.6s'" role="button">回到作品集</router-link>
  </div>
  <!-- 导航栏结束 -->

  <!-- list开始 -->
  <div class="ml-3 mr-3 wow fadeInUp" :data-wow-duration="'1.7s'" :data-wow-delay="'1s'">
    <img v-for="index in 8" :key="'image-' + index" :src="`/images/portfolioinfo1/${index}.png`" loading="lazy"
      style="width: 100%">
  </div>
  <!-- list结束 -->

</template>

<script>
// 导入wow.js，作用是各种动画。
import WOW from 'wow.js';

export default {

  // 组件名
  name: 'PortfolioTemplateA',

  // 组件注册
  components: {
  },

  // data
  data() {
    return {
      title: ''  // 初始化title
    };
  },

  // 生命周期钩子
  mounted() {
    this.initWow();
    this.title = this.$route.query.title;
  },

  // 方法
  methods: {
    initWow() {
      new WOW().init();
    }
  }

}
</script>

<style scoped lang="less">
@media (hover: hover) and (pointer: fine) {
  .button:hover {
    background-color: #0056b3;
  }
}
</style>