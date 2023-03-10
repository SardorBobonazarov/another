<template>
    <router-link :to="{name: 'InsuranceDetails', params: {id: insurance.title}}">
        <div class="outer">
            <div class="image">
                <img :src="`src/assets/images/topics/${insurance.img}`" alt="" class="mainImg">
                <div class="icon">
                    <img :src="`src/assets/images/icons/${insurance.icon}`" alt="" class="secondImg">
                </div>
            </div>
            <div class="text">
                <h3>{{ insurance.title }}</h3>
                <p>{{ insurance.info }}</p>
            </div>
            
        </div>
    </router-link>
    <router-view></router-view>
</template>

<script setup>

</script>

<script>
export default {
    props: ['insurance']
}
</script>

<style lang="scss" scoped>
    @import './singleInsurance.scss';
</style>