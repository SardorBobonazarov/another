<template>
    <div class="single-doc" data-aos="fade-up">
        <div class="image">
            <img :src="`src/assets/images/blog/${doc.imgSrc}`" alt="">
            <router-link :to="{name: 'docDetails', params: {id: doc.main}}">
                <i class="fa-solid fa-arrow-right-long"></i>
            </router-link>
            <div class="date">
                <i class="fa-regular fa-calendar"></i>
                <p>{{ doc.date }}</p>
            </div>
        </div>
        <div class="text">
            <h3>
                <router-link :to="{name: 'docDetails', params: {id: doc.main}}">{{ doc.main }}</router-link>
            </h3>
            <p>{{ doc.text }}</p>
            <router-link :to="{name: 'docDetails', params: {id: doc.main}}">Batafsil >></router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['doc']
}
</script>

<style lang="scss" scoped>
    @import './singleDoc.scss';
</style>