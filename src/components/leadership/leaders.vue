<template>
    <div class="leaders">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" v-for="leader in leaders">
                    <Leader :leader="leader"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Leader from './leader.vue';
</script>

<script>

export default {
    computed: {
        leaders() {
            return this.$store.state.leaders.leaders;
        }
    },
}
</script>

<style lang="scss" scoped>
    @import './leaders.scss';
</style>