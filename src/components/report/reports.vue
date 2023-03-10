<template>
    <div class="reports">
        <div class="container">
            <div class="row">
                <h3>Hisobotlar</h3>
                <div class="col-xl-12" v-for="report in reports">
                    <SingleReport :report="report"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SingleReport from './singleReport.vue';
</script>

<script>
export default {
    data() {
        return {
            reports: [
                {
                    name: "O'zbekiston Respublikasi Prezidentining \"O'zbekiston Respublikasi sug'urta bozorini isloh qilish va jadal rivojlanishini ta'minlash chora-tadbirlari to'g'risida\" 02.08.2019 y., 4412-sonli qarori",
                    size: '412 KB',
                    src: 'src/assets/images/docs/doc1.docx'
                },
                {
                    name: "\"Sug'urta agentlari to'g'risidagi\" nizom 28.01.2003 y., 19-son (o'zgartishlar kiritilgan)",
                    size: '412 KB',
                    src: 'src/assets/images/docs/doc1.docx'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    @import './reports.scss';
</style>