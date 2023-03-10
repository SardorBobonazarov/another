<template>
    <div class="page">
        <div class="bg" :style="{ backgroundImage: `url(${'../src/assets/images/backgrounds/' + imgSrc})`}"></div>
        <div class="shape-1"> 
            <img src="@/assets/images/shapes/page-header-shape-1.png" alt="">
        </div>
        <div class="container">
            <div class="inner">
                <div class="route">
                    <router-link to="/">BOSH SAHIFA</router-link>
                    <span class="slash">/</span>
                    <span>{{ href }}</span>
                </div>
                <div class="text">
                    <h3>{{ title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imgSrc', 'title'],
    computed: {
        href(){
            let x = this.$route.href.slice(1).toUpperCase().split('/')
            return x[0]
        }
    }
}
</script>

<style lang="scss" scoped>
 @import './page.scss';    
</style>