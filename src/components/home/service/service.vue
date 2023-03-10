<template>
    <div class="service">
        <div class="service-shape" style="background-image: url('src/assets/images/shapes/services-two-shape-1.png');"></div>
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="subtitle">
                        <img src="src/assets/images/shapes/section-title-shape-1.png" alt="">
                        <p>BIZNING XIZMATLAR</p>
                        <img src="src/assets/images/shapes/section-title-shape-2.png" alt="">
                    </div>
                    <h2>Biz barcha sug'urta sohalarini qamrab olamiz</h2>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="second-text">
                        <p>Bugungi kunda MY INSURANCE kompaniyasi sug'urta xizmatlarining 17 toifasi bo'yicha 
                        litsenziyaga ega va O'zbekiston sug'urta bozorida jadal rivojlanayotgan moliyaviy 
                        tashkilot hisoblanadi.</p>
                    </div>
                </div>
            </div>
            <div class="service-inner-two">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6" v-for="service in services">
                        <SingleService :service="service"/>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import SingleService from './singleService.vue';

</script>

<script>
export default {
    computed: {
        services(){
            return this.$store.state.homeService.services
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './service.scss';
</style>