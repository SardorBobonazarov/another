<template>
    <div class="about">
        <div class="container">
            <div class="row">
                <div class="col-xl-5">
                    <div class="title">
                        <div class="subtitle">
                            <img src="/src/assets/images/shapes/section-title-shape-1.png" alt="">
                            <p>BIZ HAQIMIZDA</p>
                            <img src="/src/assets/images/shapes/section-title-shape-2.png" alt="">
                        </div>
                        <h2>Myinsurance sug'urta kompaniyasi</h2>
                        <p class="text">Bugungi kunda MY INSURANCE ixtiyoriy sug'urtaning 17 toifasi bo'yicha litsenziyaga ega bo'lib, O'zbekiston sug'urta bozorida jadal rivojlanayotgan moliyaviy tashkilot hisoblanadi.</p>
                        <ul class="list">
                            <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <p>Pina & Associates Insurance</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <p>Payment at Contingency</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <p>Amount of Payment</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <p>Large Number of Insurance</p>
                            </li>
                        </ul>
                        <a href="#" class="thm-btn">Discover More</a>
                    </div>
                </div>
                <div class="col-xl-5">
                    <div class="image">
                        <div class="img">
                            <img src="/src/assets/images/resources/about-two-img-1.jpg" alt="">
                        </div>
                        <div class="awards">
                            <div class="content">    
                                <h2>17</h2>
                                <p>turdagi sug'urta xizmatlari</p>
                                <img src="/src/assets/images/shapes/about-two-awards-shape-2.png" alt="">
                            </div>
                        </div>
                        <div class="dots">
                            <img src="/src/assets/images/shapes/about-two-dots.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-xl-2">
                    <div class="counter">
                        <h2><span>1234</span></h2>
                        <h5>Berilgan sug'urtalar</h5>
                        <p>Nulla viverra tortor eu nulla pulvinar dignissim.</p>
                    </div>
                    <div class="counter">
                        <h2><span>955</span></h2>
                        <h5>Mizojlar</h5>
                        <p>Nulla viverra tortor eu nulla pulvinar dignissim.</p>
                    </div>
                    <div class="counter">
                        <h2><span>100</span>%</h2>
                        <h5>Zayavkalarni</h5>
                        <p>Nulla viverra tortor eu nulla pulvinar dignissim.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

    onMounted(() => {
        const counterNums = document.querySelectorAll('.counter span')

        const options = {
            root: null,
            threshold: 0.8
        }

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(!entry.isIntersecting) return
                const targets = [1234, 955, 100]
                let duration = [1, 2, 360]
                let initNum = 0;
                for(let i=0; i<3; i++){
                    setInterval(()=>{
                        if(initNum < targets[i]){
                            initNum++
                            counterNums[i].innerHTML = initNum
                        }
                        else if(initNum === targets[i]){
                            initNum = targets[i]
                            counterNums[i].innerHTML = initNum
                        }
                        else{
                            counterNums[i].innerHTML = targets[i]
                        }
                    }, duration[i])
                    initNum = 0
                }
            })
        }, options)

        counterNums.forEach(counter => {
            observer.observe(counter)
        })
    });
    
</script>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './about.scss';
</style>