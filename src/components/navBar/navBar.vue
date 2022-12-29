<script setup>

</script>

<template>
    <nav class="nav-one">
        <div class="container">
            <p class="main-header-two__top-social-text">
                <i class="fa fa-clock"></i>
                <span>Ish vaqti:</span>
                Dushanba - Juma: 09:00  - 18:00, Dam olish kuni: Shanba-Yakshanba
            </p>
            <div class="list-unstyled main-header-two__top-menu">
                <div>
                    <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img style="width: 24px" src="../assets/images/flags/uz.svg" alt="">
                        O'zbek
                    </button>
                    <div class="dropdown-menu" style="">
                        <span href="#" class="dropdown-item">
                            <img style="width: 24px" src="../assets/images/flags/us.svg" alt="">
                            English
                        </span>
                        <span href="https://myinsurance.uz/lang/ru" class="dropdown-item">
                            <img style="width: 24px" src="../assets/images/flags/ru.svg" alt="">
                            русский
                        </span>
                    </div>
                </div>

                <a href="#" class="text-decoration-none">
                    <i class="fa fa-adjust"></i>
                </a>

                <a class="text-decoration-none" id="fontsize-plus" style="cursor: pointer;">A+</a>

                <a class="text-decoration-none" id="fontsize-default" style="cursor: pointer;"> A </a>

                <a class="text-decoration-none" id="fontsize-minus" style="cursor: pointer;">A-</a>

                <a href="#" class="text-decoration-none">
                    <i class="fa fa-user" style="margin-right:10px"></i>Shaxsiy kabinet
                </a>
            </div>
        </div>
    </nav>



    <nav class="nav-two">
        <div class="main-header-two__top-details">
            <div class="container">
                <div class="main-header-two__top-details-inner">
                    <div class="main-header-two__logo">
                        <a href="#">
                            <img src="../assets/images/resources/logo.png" alt="" style="width:150px">
                        </a>
                    </div>
                    <ul class="list-unstyled main-header-two__top-details-list">
                        <li>
                            <div class="icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="text">
                                <h5>Rasmiy pochta</h5>
                                <p><a href="mailto:info@myinsurance.uz">info@myinsurance.uz</a></p>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="text">
                                <h5>Aloqa uchun</h5>
                                <p><a href="tel:+998712051919">+998 71 205 19 19</a></p>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="text">
                                <h5>Manzil</h5>
                                <p> Kichik Mirabod ko'chasi, 95</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <nav class="main-menu main-menu-two clearfix">
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

<style scoped lang="scss">
    @import './navBar.scss';
</style>
