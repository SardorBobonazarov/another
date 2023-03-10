<template>
    <div class="single-card" data-aos="fade-up">
        <div class="image">
            <img :src="`src/assets/images/topics/${news.imgSrc}`" alt="">
            <router-link :to="{name: 'newsDetails', params: {id: news.main}}">
                <i class="fa-solid fa-arrow-right-long"></i>
            </router-link>
            <div class="date">
                <i class="fa-regular fa-calendar"></i>
                <p>{{ news.date }}</p>
            </div>
        </div>
        <div class="text">
            <h3>
                <router-link :to="{name: 'newsDetails', params: {id: news.main}}">{{ news.main }}</router-link>
            </h3>
            <p>{{ news.text }}</p>
            <router-link :to="{name: 'newsDetails', params: {id: news.main}}">Batafsil >></router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['news']
}
</script>

<style lang="scss" scoped>
    @import './singleNew.scss';
</style>