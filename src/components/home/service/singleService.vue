<template>
    <div class="singleService" data-aos="fade-up">
        <div class="icon-box">
            <i :class="service.icon"></i>
        </div>
        <div class="line"></div>
        <h3 class="title">
            <a href="#">{{ service.title }}</a>
        </h3>
        <p class="text">{{ service.text }}</p>
    </div>
</template>

<script>
export default {
    props: ['service']
}
</script>

<style lang="scss" scoped>
    @import './singleService.scss';
</style>