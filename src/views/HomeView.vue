<template>
  <Swiper />
  <Cards />
  <About />
  <Service />
  <Partners />
  <Order />
  <Process />
  <Opinions />
  <Map />
</template>

<script setup>
import Swiper from '../components/swiper/swiper.vue';
import Map from '../components/home/map/map.vue'
import About from '../components/home/about/about.vue';
import Cards from '../components/home/cards/cards.vue';
import Opinions from '../components/home/opinions/opinions.vue';
import Order from '../components/home/order/order.vue';
import Partners from '../components/home/partners/partners.vue';
import Process from '../components/home/process/process.vue';
import Service from '../components/home/service/service.vue';
</script>

<script>
export default {
  
}
</script>

<style scoped>
  @import '../sass/home.scss';
</style>