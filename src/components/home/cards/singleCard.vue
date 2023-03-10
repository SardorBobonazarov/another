<template>
    <div class="single-card">
        <div class="image">
            <img :src="`src/assets/images/resources/${card.imgSrc}`" alt="">
        </div>
        <div class="content">
            <div class="icon">
                <i :class="card.icon"></i>
            </div>
            <div class="text">
                <p><a href="#">{{ card.text }}</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['card']
}
</script>

<style lang="scss" scoped>
    @import './singleCard.scss';
</style>