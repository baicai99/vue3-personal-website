<template>
  <div class="container-fluid">
    <PortfolioTemplate1/>
  </div>
</template>

<script>
import PortfolioTemplate1 from './components/Portfolio/PortfolioTemplate1.vue';

export default {
  name: 'App',
  components: {
    PortfolioTemplate1,
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
