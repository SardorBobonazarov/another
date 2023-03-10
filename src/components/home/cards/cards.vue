<template>
    <div class="container">
        <div class="cards row">
            <div data-aos="fade-up" class="col-xl-4 col-lg-4" v-for="card in cards">
                <singleCard :card="card"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import singleCard from './singleCard.vue';
</script>

<script>

export default {
    data() {
        return {
            
        }
    },
    computed: {
        cards(){
            return this.$store.state.homeCard.cards
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './cards.scss';
</style>