<template>
    <div class="side-back" :class="{ active: active }" @click="$store.state.activeMenu = false"></div>
    <nav :class="{ active: active }">
        <div class="close-btn" @click="$store.state.activeMenu = false">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="logo">
            <a href="">
                <img src="@/assets/images/resources/logo-2.png" alt="" />
            </a>
        </div>
        <div class="nav">
            <ul>
                <li>
                    <a href="">Sug'urta mahsulotlari</a>
                </li>
                <li>
                    <a href="">Yangiliklar</a>
                </li>
                <li class="">
                    <div class="upper-link">
                        <a href="">Kompaniya haqida</a>
                        <i class="fa-solid fa-angle-right" 
                            @click="innerActivated[0] = !innerActivated[0]"
                            :class="{active: innerActivated[0]}"
                        ></i>
                    </div>
                    <ul :class="{innerActivated: innerActivated[0]}">
                        <li>
                            <a href="">Jamiyat faoliyati va maqsadlari</a>
                        </li>
                        <li>
                            <a href="">Aksiyadorlarga</a>
                        </li>
                        <li>
                            <a href="">Rahbariyat</a>
                        </li>
                        <li>
                            <a href="">Bo'sh ish o'rinlari</a>
                        </li>
                        <li>
                            <a href="">Kompaniya tarixi</a>
                        </li>
                        <li>
                            <a href="">Rivojlanish strategiyasi</a>
                        </li>
                        <li>
                            <a href="">Hisbotlar</a>
                        </li>
                        <li>
                            <a href="">Litsensiya va ta'sis hujjatlari</a>
                        </li>
                        <li>
                            <a href="">Jamiyat tuzilmasi</a>
                        </li>
                        <li>
                            <a href="">Kollegial va maslahat organlari</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="">Murojaatlar</a>
                </li>
                <li>
                    <div class="upper-link">
                        <a href="">Bog'lanish</a>
                        <i class="fa-solid fa-angle-right"
                            @click="innerActivated[1] = !innerActivated[1]"
                            :class="{active: innerActivated[1]}"
                        ></i>
                    </div>
                    <ul :class="{innerActivated: innerActivated[1]}">
                        <li>
                            <a href="">Qayta aloqa</a>
                        </li>
                        <li>
                            <a href="">Biz bilan aloqa</a>
                        </li>
                        <li>
                            <a href="">Filiallar</a>
                        </li>
                        <li>
                            <a href="">So'rovnomalar</a>
                        </li>
                        <li>
                            <a href="">Bloglar</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="icons">
            <div class="email">
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:help@myinsurance.uz">help@myinsurance.uz</a>
            </div>
            <div class="call">
                <i class="fa-solid fa-phone"></i>
                <a href="tel:99871 205 19 19">+99871 205 19 19 </a>
            </div>
            <div class="social-icons">
                <a href="">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                    <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            innerActivated: [false,false]
        }
    },
    computed: {
        active(){
            return this.$store.state.activeMenu
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './sideBar.scss';
</style>