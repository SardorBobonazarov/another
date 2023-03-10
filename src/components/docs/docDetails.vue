<template>
    <div class="container">
        <div class="docs">
            <div class="image">
                <img :src="`../../src/assets/images/blog/${docs.imgSrc}`" alt="">
                <div class="text">
                    <i class="fa-regular fa-calendar"></i>
                    <span>{{ go.date }}</span>
                    <h3>{{ go.main }}</h3>
                    <p>{{ go.text }}</p>
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
        docs(){
            let docs = this.$store.state.docs.docs
            for (let i=0; i<docs.length; i++){
                if(docs[i].main === this.id){
                    this.go = docs[i]
                }
            }
            return this.go
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './docDetails.scss';
</style>