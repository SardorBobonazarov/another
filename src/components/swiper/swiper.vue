<template>
    <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }"
        :pagination="{
            clickable: true,
        }"
        :navigation="{
            nextEl: '#next',
            prevEl: '#prev'
        }"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide v-for="swiper in swipers">
            <div :style="{ backgroundImage: 'url(src/assets/images/' + swiper.imgSrc + ')' }" 
                 class="single-swiper"
            >
                <SingleSwiper :swiper="swiper"/>
            </div>
        </swiper-slide>
    </swiper>

    <div class="slider-nav">
        <div id="next">
            <i class="fa-solid fa-arrow-right-long"></i>
        </div>
        <div id="prev">
            <i class="fa-solid fa-arrow-left-long"></i>
        </div>
    </div>
</template>

<script setup>

    import SingleSwiper from './SingleSwiper.vue'

    import { Swiper, SwiperSlide } from "swiper/vue";
    import "swiper/css";
    import "swiper/css/navigation";
    import { Navigation, Autoplay } from "swiper";

    const modules = [Navigation, Autoplay]
</script>

<script>
export default {
    computed: {
        swipers(){ 
            return this.$store.state.swiper.swipers 
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './swiper.scss';
</style>