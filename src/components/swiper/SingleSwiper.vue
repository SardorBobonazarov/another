<template>
    <div class="container">
        <h2>{{ swiper.headerPrimaryText }}</h2>
        <p>{{ swiper.headerSecondaryText }}</p>
        <a :href="swiper.linkTo">Batafsil</a>
    </div>
</template>

<script setup>

</script>

<script>
export default {
    props: ['swiper'],
}
</script>

<style lang="scss" scoped>
    @import './SingleSwiper.scss';
</style>