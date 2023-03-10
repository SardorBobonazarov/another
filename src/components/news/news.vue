<template>
    <div class="news-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6" v-for="singleNews in news">
                    <SingleNew :news="singleNews"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SingleNew from './singleNew.vue';

</script>

<script>
export default {
    computed: {
        news(){
            return this.$store.state.news.news
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './news.scss';
</style>