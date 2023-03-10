<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-3">
                <h2>Bizning biznes hamkorlarimiz va mijozlarimiz</h2>
            </div>
            <div class="col-xl-9">
                <swiper
                    :slidesPerView="4"
                    :spaceBetween="30"
                    :slidesPerGroup="1"
                    :loop="true"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                    :loopFillGroupWithBlank="true"
                    :modules="modules"
                    class="mySwiper"
                >
                    <swiper-slide v-for="partner in partners">
                        <img :src="`src/assets/images/brand/${partner}.png`" alt="">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper'
import "swiper/css";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay]
        };
    },
    data() {
        return {
            partners: [
                'brand-1-1',
                'brand-1-2',
                'brand-1-3',
                'brand-1-4',
                'brand-1-5'
            ]
        }
    }, 
}
</script>

<style lang="scss" scoped>
    @import './partners.scss';
</style>