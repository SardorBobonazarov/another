<template>
    <div class="report">
        <div class="inner">
            <div class="shape-1">
                <img src="src/assets/images/shapes/testimonial-one-shape-1.png" alt="">
            </div>
            <div class="info">
                <div class="image">
                    <img class="one" src="src/assets/images/shapes/file-shape.png" alt="">
                    <div class="quote">
                        <img class="two" src="src/assets/images/testimonial/testimonial-1-quote.png" alt="">
                    </div>
                </div>
                <div class="text">
                    <p>{{ report.size }}</p>
                    <div class="download" @click.prevent="downloadWithAxios(report.src, report.name)">
                        <h3>{{ report.name }}</h3>
                        <button>
                            <i class="fa-solid fa-download"></i>
                            <span>YUKLASH</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['report'],
    methods: {
        download(response, title){
            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', title+'.docx')
            document.body.appendChild(link)
            link.click()
        },
        downloadWithAxios(url, title) {
            axios({
                method: 'get',
                url,
                responseType: 'arraybuffer',
            })
                .then((response) => {
                    this.download(response, title)
                })
                .catch(() => console.log('error occured'))
            },
    }
}
</script>

<style lang="scss" scoped>
    @import './singleReport.scss';
</style>