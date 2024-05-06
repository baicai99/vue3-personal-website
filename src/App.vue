<template>
  <router-view class="container-fluid"></router-view>
  <indexFooter></indexFooter>
</template>

<script>
import indexFooter from './components/indexFooter.vue';

export default {
  name: 'App',
  components: {
    indexFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
