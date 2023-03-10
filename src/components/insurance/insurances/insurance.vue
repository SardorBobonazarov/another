<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-3 col-lg-4" data-aos="fade-up" v-for="insurance in insurances">
                <singleInsurance :insurance="insurance"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    import singleInsurance from './singleInsurance.vue';
</script>

<script>
export default {
    computed: {
        insurances(){
            return this.$store.state.insurances.insurances
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './insurance.scss';
</style>