<template>
  <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
    <div class="vh100 carousel-inner">
      <div class="carousel-item active" data-interval="10000">
        <img src="../../../public/images/portfolioinfo10/file10/1.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item" data-interval="2000">
        <img src="../../../public/images/portfolioinfo10/file10/1.jpg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../../../public/images/portfolioinfo10/file10/1.jpg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="less" scoped>
.vh100{
  height: 100vh;
}
.carousel-control-prev,
.carousel-control-next {
  border: none;
  background-color: transparent;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
filter: drop-shadow(2px 2px 3px #000);
}
</style>