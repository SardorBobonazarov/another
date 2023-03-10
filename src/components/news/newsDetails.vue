<template>
    <div class="container">
        <div class="news">
            <div class="image">
                <img :src="`../../src/assets/images/topics/${news.imgSrc}`" alt="">
                <div class="text">
                    <i class="fa-regular fa-calendar"></i>
                    <span>{{ news.date }}</span>
                    <h3>{{ news.main }}</h3>
                    <p>{{ news.text }}</p>
                    <p>Инвестируйте в свое будущее c уверенностью, оформив страховой полис в My Insurance.</p>
                </div>
                <div class="icons">
                    <a href="">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <div class="slogans">
                    <div class="one">We proudly protect our loved ones life</div>
                    <div class="two">Survived not only five centuries</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            go: null
        }
    },
    computed: {
        news(){
            let news = this.$store.state.news.news
            for (let i=0; i<news.length; i++){
                if(news[i].main === this.id){
                    this.go = news[i]
                }
            }
            return this.go
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './newsDetails.scss';
</style>