<template>
    <Page :title="id" :imgSrc="'page-header-bg.jpg'"/>
    <div class="leader-details">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="image">
                        <img :src="`../../src/assets/images/topics/${fullInfo.imgSrc}`" alt="">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="text">
                        <p class="position">{{ fullInfo.position }}</p>
                        <h3>{{ fullInfo.name }}</h3>
                        <div class="icons">
                            <a :href="fullInfo.linkedinLink">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a :href="fullInfo.facebookLink">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </div>
                        <p class="info">{{ fullInfo.info }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Page from '../page/page.vue'
</script>

<script>
export default {
    props: ['id'],
    data() {
        return {
            info: null
        }
    },
    computed: {
        fullInfo(){
            let a = this.$store.state.leaders.leaders
            for(let i=0; i<a.length; i++){
                if(a[i].name === this.id){
                    this.info = a[i]
                }
            }
            return this.info
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './singleLeader.scss';
</style>