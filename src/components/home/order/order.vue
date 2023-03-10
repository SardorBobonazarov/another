<template>
    <section class="order">
        <div class="shape-3">
            <img src="/src/assets/images/shapes/get-insuracne-two-shape-3.png" alt="">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-5">
                    <div class="shapes-outer">
                        <div class="shapes">
                            <div class="shape-1">
                                <img src="/src/assets/images/shapes/get-insuracne-two-shape-2.png" alt="">
                            </div>
                            <div class="shape-2">
                                <img src="/src/assets/images/resources/get-insurance-two-img-1.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7">
                    <div class="text">
                        <div class="subtitle">
                            <img src="/src/assets/images/shapes/section-title-shape-1.png" alt="">
                            <p>ONLAYN BUYURTMA BERING</p>
                            <img src="/src/assets/images/shapes/section-title-shape-2.png" alt="">
                        </div>
                        <h2>Buyrutma berish uchun quyidagi formani to'ldiring!</h2>
                    </div>
                    <div class="form">
                        <div class="tabs">
                            <ul>
                                <li v-for="tab in tabs" :class="{active: (tab.id === activeId)}" @click="activeId = tab.id, result.insurance = tab.text">
                                    <div class="tab">
                                        <img :src="`src/assets/images/icon/${tab.imgSrc}.png`" alt="">
                                        <p>{{ tab.text }}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="content">
                            <form prevent.default>
                                <input type="text" placeholder="Ismingiz" v-model="result.name">
                                <input type="text" placeholder="Telefon raqamingiz" v-model="result.number">
                                <div class="select" @click="selected = !selected">
                                    <p>{{ result.option }}</p>
                                    <i class="fa-solid fa-sort-down" :class="{'selected': selected}"></i>
                                    <div class="options" v-if="selected">
                                        <ul>
                                            <li v-for="option in options" @click="result.option = option">{{ option }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                            <div class="submit">
                                    <a @click="sendData(id)">Buyurtma berish</a>
                                    <div class="review">
                                        <p>Xizmatdan oldin foydalanganmisiz?</p>
                                        <h4>Buyrutma statusini tekshirish</h4>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            activeId: 1,
            selected: false,
            options: ["Majburiy sug'urta", "Kasko sug'urta", "Mulk sug'urtasi"],
            tabs: [
                {
                    imgSrc: 'get-insuracne-two-tab-icon-1',
                    text: "Mulk sug'urtasi",
                    id: 1
                },
                {
                    imgSrc: 'get-insuracne-two-tab-icon-2',
                    text: "Avto sug'urta",
                    id: 2
                },
                {
                    imgSrc: 'get-insuracne-two-tab-icon-3',
                    text: "Hayot sug'urtasi",
                    id: 3
                },
                {
                    imgSrc: 'get-insuracne-two-tab-icon-4',
                    text: "Biznes sug'urtasi",
                    id: 4
                }
            ],
            result: {
                name: '',
                number: '',
                option: "Sug'urta turini tanlang",
                insurance: ''
            }
        }
    },
    methods: {
        tabChosen(e){
            console.log(e);
        },
        sendData(id){
            console.log(this.result);
        }
    },
}
</script>

<style lang="scss" scoped>
    @import './order.scss';
</style>