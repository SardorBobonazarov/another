<template>
    <div class="leader">
        <div class="image">
            <img :src="`/src/assets/images/topics/${leader.imgSrc}`" alt="">
            <div class="social-links">
                <i class="fa-solid fa-share-nodes"></i>
                <div class="links">
                    <a :href="leader.linkedinLink">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a :href="leader.facebookLink">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="text">
            <p class="position">{{ leader.position[language] }}</p>
            <h3>
                <router-link :to="{name: 'singleLeader', params: {id: leader.name}}">{{ leader.name }}</router-link>
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['leader'],
    computed: {
        language(){
            return localStorage.getItem('lang')
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './leader.scss';
</style>