<template>
  <div>
    <h1 class="pt-4 mb-3 wow fadeInUp" :data-wow-duration="titleWowDuration" :data-wow-delay="titleWowDelay">作品集</h1>

    <!-- 返回主页按钮 -->
    <a class="mb-4 mr-4 btn btn-lg btn-outline-success wow fadeInUp" download :data-wow-duration="button1WowDuration"
      :data-wow-delay="button1WowDelay" :href="downloadUrl" role="button">下载全部（服务器很卡，可能要下载一个小时）</a>

    <a class="mb-4  mr-4 btn btn-lg btn-outline-success wow fadeInUp" :data-wow-duration="button2WowDuration"
      :data-wow-delay="button2WowDelay" :href="liblibUrl" role="button">liblib（推荐）</a>

    <a class="mb-4 mr-4 btn btn-lg btn-outline-success wow fadeInUp" :data-wow-duration="button3WowDuration"
      :data-wow-delay="button3WowDelay" href="./index.html" role="button">返回主页</a>

    <div class="row">
      <!-- 使用v-for循环创建card组件 -->
      <PortfolioCard v-for="(item, index) in cardsData" :key="index" :item="item" :index="index"></PortfolioCard>
    </div>
    <div class="footer w-100 row justify-content-center align-items-center">
      <a href="https://beian.miit.gov.cn/" class="mb-3 text-center fadeInUp wow" :data-wow-duration="footerWowDuration"
        :data-wow-delay="footerWowDelay" target="_blank">粤ICP备2024179131号-1</a>
    </div>
  </div>
</template>

<script>
import PortfolioCard from './Portfolio/PortfolioCard.vue';
import WOW from 'wow.js';

export default {
  name: 'App',
  components: {
    PortfolioCard,
  },
  data() {
    return {
      cardsData: [
        {
          imgrul: "/images/portfolio/portfolioinfo10.png",
          title: "HCK 4月 AIGC",
          count: "114",
          url: "./pages/portfolioinfo10.html",
        },
        {
          imgrul: "/images/portfolio/portfolioinfo9.png",
          title: "HCK 3月 AIGC",
          count: "107",
          url: "./pages/portfolioinfo9.html",
        },
        {
          imgrul: "/images/portfolio/portfolioinfo7.png",
          title: "平面设计 大木工包 手机版",
          count: "13",
          url: "./pages/portfolioinfo8.html",
        },
        {
          imgrul: "/images/portfolio/portfolioinfo7.png",
          title: "平面设计 大木工包 电脑版",
          count: "20",
          url: "./pages/portfolioinfo7.html",
        },
        {
          imgrul: "/images/portfolio/portfolioinfo5.png",
          title: "平面设计 电工包 手机版",
          count: "27",
          url: "./pages/portfolioinfo6.html",
        },
        {
          imgrul: "/images/portfolio/portfolioinfo5.png",
          title: "平面设计 电工包 电脑版",
          count: "44",
          url: "./pages/portfolioinfo5.html",
        },
        {
          imgrul: "/images/portfolio/portfolioinfo4.png",
          title: "平面设计 亚马逊高级A+ 电脑版",
          count: "2",
          url: "./pages/portfolioinfo4.html",
        },
        {
          imgrul: "/images/portfolio/portfolioinfo3.png",
          title: "AIGC 模特换脸",
          count: "7",
          url: "./pages/portfolioinfo3.html",
        },
        {
          imgrul: "/images/portfolio/portfolioinfo2.png",
          title: "平面设计 亚马逊高级A+ 手机端",
          count: "43",
          url: "./pages/portfolioinfo2.html",
        },
        {
          imgrul: "/images/portfolio/portfolioinfo1.png",
          title: "平面设计 旗舰店设计",
          count: "19",
          url: "./pages/portfolioinfo1.html",
        },
      ],
      titleWowDuration: '1.3s',
      titleWowDelay: '0.1s',
      button1WowDuration: '1.3s',
      button1WowDelay: '0.3s',
      button2WowDuration: '1.3s',
      button2WowDelay: '0.5s',
      button3WowDuration: '1.3s',
      button3WowDelay: '0.7s',
      footerWowDuration: '1.3s',
      footerWowDelay: '2s',
      downloadUrl: './assets/download/ALL.zip',
      liblibUrl: 'https://www.liblib.art/userpage/c0e1c819d36c4bce9b077e04f9eaf693/publish/image',
    };
  },
  mounted() {
    new WOW({
      boxClass: 'wow',          // 默认的触发动画的类
      animateClass: 'animated', // 动画类（animate.css 中定义）
      offset: -2000,            // 触发动画的偏移量设置为-2000，使得所有元素都被认为是在视口内
      mobile: true,             // 是否在移动设备上启用动画
      live: true                // 禁用对异步加载元素的动画观察
    }).init();
  },
};
</script>

<style scoped>
@media (hover: hover) and (pointer: fine) {
  .button:hover {
    background-color: #0056b3;
  }
}

a {
  text-decoration: none;
  color: #1d1d1f;
}

a:hover {
  text-decoration: none;
}

img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  background-color: #eeeded;
}

.footer {
  height: 100px;
}
.btn-outline-success {
  color: #28a745;
  border-color: #28a745;
}
</style>
