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
            <button @click="selectTemplate(item.templateType)" class="btn btn-sm btn-outline-success">查看</button>
          </div>
          <small class="text-muted">查看 {{ item.count }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const templateTypeToRouteName = {
  'A': 'PortfolioTemplateA',
  'B': 'PortfolioTemplateB',
  'C': 'PortfolioTemplateC',
};
export default {
  methods: {
    // PortfolioCard.vue
    methods: {

    },
    selectTemplate(templateType) {
      const routeName = templateTypeToRouteName[templateType];
      if (routeName) {
        this.$router.push({ name: routeName, query: { title: this.item.title } });
      } else {
        console.error('Invalid templateType:', templateType);
      }
    }
  },
  props: {
    item: Object,
    index: Number,
    title: String,
  },
  computed: {
    wowDuration() {
      return `${1.3 + this.index * 0.2}s`;
    },
    wowDelay() {
      return `${0.2 * this.index}s`;
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  background-color: #eeeded;
}
</style>
