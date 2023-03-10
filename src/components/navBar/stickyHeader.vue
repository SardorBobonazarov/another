<template>
    <nav :class="{intersecting: intersecting}">
        <div class="main-menu-two__wrapper clearfix">
            <div class="container">
                <div class="main-menu-two__wrapper-inner clearfix">
                    <div class="main-menu-two__left">
                        <div class="main-menu-two__main-menu-box">
                            <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                            <ul class="main-menu__list">
                                <li>
                                    <a href="#">
                                        <i class="fa fa-list"></i>
                                    </a>
                                </li>
                                <li class="">
                                    <a href="/sugurtalar#">Sug'urta mahsulotlari </a>
                                </li>                                                            
                                <li class="">
                                    <a href="/yangiliklar#">Yangiliklar </a>
                                </li>                                                            
                                <li class=" dropdown ">
                                    <a href="#">Kompaniya haqida</a>
                                    <ul>
                                        <li><a href="/subject-and-main-goals">Jamiyat faoliyati va maqsadlari</a></li>
                                        <li><a href="/aksiyadorlar">Aksiyadorlarga</a></li>
                                        <li><a href="/leadership">Rahbariyat</a></li>
                                        <li><a href="/ish-orinlari">Bo'sh ish o'rinlari</a></li>
                                        <li><a href="/history-of-company">Kompaniya tarixi</a></li>
                                        <li><a href="/">Rivojlanish strategiyasi</a></li>
                                        <li><a href="/hisobotlar">Hisobotlar</a></li>
                                        <li><a href="/kompaniya-hujjatlari">Litsensiya va ta'sis hujjatlari</a></li>
                                        <li><a href="/">Jamiyat tuzilmasi</a></li>
                                        <li><a href="/kollegial-va-maslahat-organlari">Kollegial va maslahat organlari</a></li>
                                    </ul>
                                </li>
                                <li class="">
                                    <a href="/appeals">Murojaatlar</a>
                                </li>                                                            
                                <li class=" dropdown ">
                                    <a href="#">Bog'lanish</a>
                                    <ul>
                                        <li><a href="/contact">Qayta aloqa</a></li>
                                        <li><a href="/contact-us">Biz bilan aloqa</a></li>
                                        <li><a href="/filiallar">Filiallar</a></li>
                                        <li><a href="/">So'rovnomalar</a></li>
                                        <li><a href="/blog">Bloglar</a></li>
                                    </ul>
                                </li>                                                            
                            </ul>
                        </div>
                    </div>
                    <div class="main-menu-two__right">
                        <div class="main-menu-two__search-box-get-quote">
                            <div class="main-menu-two__search-box">
                                <a href="#" class="main-menu-two__search search-toggler icon-magnifying-glass">
                                    <i class="fas fa-search"></i>
                                </a>
                            </div>
                            <div class="main-menu-two__get-quote">
                                <a href="http://online.myinsurance.uz:7223/online/ins/r/e-osgo" class="thm-btn main-menu-two__get-quote-btn">E-POLIS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>

<script>
export default {
    props: ['intersecting'],
    data() {
        return {
            
        }
    },
    computed: {
        intersecting(){
            return this.intersecting 
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './stickyHeader.scss';
</style>