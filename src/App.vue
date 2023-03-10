<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/footer/footer.vue';
import NavBar from './components/navBar/navBar.vue';
import Loader from './components/loader/loader.vue';
</script>

<template>
  <template v-if="loading">
    <Loader />
  </template>
  <template v-else>
    <header>
      <NavBar />
    </header>
    <RouterView />
    <footer>
      <Footer />
    </footer>
  </template>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    this.loading = false
  },
}
</script>

<style scoped>
  
</style>
