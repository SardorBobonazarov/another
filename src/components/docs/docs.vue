<template>
    <div class="docs">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6" v-for="doc in docs">
                    <SingleDoc :doc="doc"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SingleDoc from './singleDoc.vue';
</script>

<script>

export default {
    computed: {
        docs() {
            return this.$store.state.docs.docs;
        }
    },
}
</script>

<style lang="scss" scoped>
    @import './docs.scss';
</style>