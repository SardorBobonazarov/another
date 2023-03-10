<template>
    <Page :title="'Jamiyat faoliyati va maqsadlari'" :imgSrc="'page-header-bg.jpg'"/>
    <subject />
</template>

<script setup>
import subject from '../components/subject/subject.vue'
import Page from '../components/page/page.vue';

</script>

<script>
export default {
    name: 'Subject'
}
</script>
<style lang="">
    
</style>