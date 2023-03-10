<template>
    <div class="container process">
        <div class="title">
            <div class="subtitle">
                <img src="src/assets/images/shapes/section-title-shape-1.png" alt="">
                <p>SUG'URTALASH JARAYONI</p>
                <img src="src/assets/images/shapes/section-title-shape-2.png" alt="">
            </div>
            <h2>Bizning oson ishlash jarayoni 4ta bosqichda</h2>
        </div>
        <div class="process-inner">
            <div class="process-shape">
                <img src="src/assets/images/shapes/process-shape-1.png" alt="">
            </div>
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-6" v-for="process in processes">
                    <SingleProcess :process="process"/>
                </div>
            </div>
        </div>
        <div class="get-call">
            <input type="text" placeholder="Telefon raqamini kiriting" v-model="phone">
            <button @click="call">Aloqaga chiqing</button>
        </div>
    </div>
</template>

<script setup>
import SingleProcess from './singleProcess.vue';
</script>

<script>
export default {
    computed: {
        processes() {
            return this.$store.state.homeProcess.processes;
        }
    },
    data() {
        return {
            phone: ''
        }
    },
    methods: {
        call(){
            console.log(this.phone);
            this.phone = ''
        }
    },
}
</script>

<style lang="scss" scoped>
    @import './process.scss';
</style>