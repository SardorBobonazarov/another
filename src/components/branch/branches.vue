<template>
    <div class="branches">
        <div class="container">
            <div class="top">
                <div class="row">
                    <div class="col-xl-3">
                        <div class="float">
                            <a href="">Xaritada ko'rish</a>
                        </div>
                        <div class="box">
                            <div class="icon">
                                <i class="fa-solid fa-map-location-dot"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9">
                        <h3>O'zbekiston bo'ylab 60 dan ortiq filial va ofislarimiz mavjud</h3>
                        <p>Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt ipsum.</p>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="row">
                    <div class="col-xl-4 col-lg-4" v-for="branch in branches">
                        <singleBranch :branch="branch"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import singleBranch from './singleBranch.vue';
</script>

<script>
export default {
    computed: {
        branches(){
            return this.$store.state.branches.branches
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './branches.scss';
</style>