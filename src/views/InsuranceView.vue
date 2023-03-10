<template>
    <Page :title="'sug\'urtalash'" :imgSrc="'page-header-bg.jpg'"/>
    <Insurance />
    <Tracking />
</template>

<script setup>

import Insurance from '../components/insurance/insurances/insurance.vue';
import Tracking from '../components/insurance/tracing/tracking.vue';
import Page from '../components/page/page.vue';
</script>

<script>

export default {
    name: "insurance",
}
</script>

<style lang="scss" scoped>
    
</style>