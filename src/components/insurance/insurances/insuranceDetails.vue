<template>
    <Page :title="'Title goes here'" :imgSrc="'page-header-bg.jpg'"/>
    <div class="choose">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="title">
                        <div class="subtitle">
                            <img src="@/assets/images/shapes/section-title-shape-1.png" alt="">
                            <p>INSURANCE BENEFITS</p>
                            <img src="@/assets/images/shapes/section-title-shape-2.png" alt="">
                        </div>
                        <h2>Why is health insurance important?</h2>
                    </div>
                    <p class="one-text">Morbi viverra diam nec tellus semper, consequat hendrerit quam volutpat. Aliquam convallis feugiat orci, in tincidunt nisl iaculis nec. Aenean laoreet, nulla a ornare sollicitudin, sapien justo volutpat quam, a facilisis tortor sem consectetur risus. Nam nec nulla dui. Vivamus ac tortor sit amet ex facilisis tincidunt varius nibh ut nisl euismod.</p>
                </div>
                <div class="col-xl-6 col-lg-6 icons">
                    <div class="single-choose">
                        <div class="image">
                            <img src="@/assets/images/icons/finger.png" alt="">
                        </div>
                        <div class="text">
                            <div class="header">
                                <h3>Fast & easy process</h3>
                            </div>
                            <div class="inline-text">
                                <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div class="single-choose">
                        <div class="image">
                            <img src="@/assets/images/icons/note.png" alt="">
                        </div>
                        <div class="text">
                            <div class="header">
                                <h3>Fast & easy process</h3>
                            </div>
                            <div class="inline-text">
                                <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div class="single-choose">
                        <div class="image">
                            <img src="@/assets/images/icons/policy.png" alt="">
                        </div>
                        <div class="text">
                            <div class="header">
                                <h3>Control over policy</h3>
                            </div>
                            <div class="inline-text">
                                <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div class="single-choose">
                        <div class="image">
                            <img src="@/assets/images/icons/save_money.png" alt="">
                        </div>
                        <div class="text">
                            <div class="header">
                                <h3>Save your money</h3>
                            </div>
                            <div class="inline-text">
                                <p>Lorem ipsum dolor sit amet, sectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="benefits">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 xol-lg-6">
                    <div class="image">
                        <img src="@/assets/images/resources/benefits-two-img.jpg" alt="">
                    </div>
                </div>
                <div class="col-xl-6 xol-lg-6">
                    <div class="title">
                        <div class="subtitle">
                            <img src="@/assets/images/shapes/section-title-shape-1.png" alt="">
                            <p>INSURANCE BENEFITS</p>
                            <img src="@/assets/images/shapes/section-title-shape-2.png" alt="">
                        </div>
                        <h2>Some of the salient benefits of the product include:</h2>
                    </div>
                    <div class="include">
                        <ul>
                            <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <span>Room Entitlement & Annual Limits.</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <span>In-patient Hospitalization.</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <span>Day Care Treatment.</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <span>Specialized Investigations.</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <span>Pre-Post Hospitalization.</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <span>Ambulance Services.</span>
                            </li>
                            <li>
                                <i class="fa-solid fa-circle-check"></i>
                                <span>Accidental Out-patient Expense.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="talk">
        <div class="top_talk">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4">
                        <div class="phone">
                            <div class="phone_inner">
                                <i class="fa-solid fa-phone-flip"></i>
                                <div class="float">
                                    <a href="tel:9200368090">+92 (003) 68-090</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8">
                        <div class="text">
                            <h3>Talk to our insurance experts</h3>
                            <p>Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus ipsum,
                            sed rutrum metus tincidunt et. Sed eget tincidunt ipsum.</p>
                            <div class="button">
                                <router-link to="/about">Get Insured Now</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="buy">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4">
                        <div class="inner">
                            <div class="header">
                                <i class="fa-solid fa-tv"></i>
                                <h4>Buy online</h4>
                            </div>
                            <p class="text">You to pay through multiple payment options, you can pay through:</p>
                            <ul>
                                <li>
                                    <i class="fa-solid fa-circle-check"></i>
                                    <span>Any Visa/Master Credit Card</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-circle-check"></i>
                                    <span>Paypal Account</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-circle-check"></i>
                                    <span>Online ATM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="inner">
                            <div class="header">
                                <i class="fa-regular fa-clipboard"></i>
                                <h4>After buying</h4>
                            </div>
                            <p class="text">You to pay through multiple payment options, you can pay through:</p>
                            <ul>
                                <li>
                                    <i class="fa-solid fa-circle-check"></i>
                                    <span>Any Visa/Master Credit Card</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-circle-check"></i>
                                    <span>Paypal Account</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-circle-check"></i>
                                    <span>Online ATM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="inner">
                            <div class="header">
                                <i class="fa-solid fa-tv"></i>
                                <h4>Buy online</h4>
                            </div>
                            <p class="text">At UIC, the customer comes first. We always delighted to hear from you, any time of the day.</p>
                            <ul>
                                <li>
                                    <router-link to="/about">Leave a Feedback</router-link>
                                </li>
                                <li>
                                    <router-link to="/">Contact with Experts</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="help">
        <div class="container">
            <div class="title">
                <div class="subtitle">
                    <img src="@/assets/images/shapes/section-title-shape-1.png" alt="">
                    <p>WE ALWAYS HELP</p>
                    <img src="@/assets/images/shapes/section-title-shape-2.png" alt="">
                </div>
                <h2>They frequently asked questions</h2>
            </div>

            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <i class="fa-solid fa-circle-question"></i>
                                    <span>Maecenas scelerisque nibh vitae turpis</span>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <i class="fa-solid fa-circle-question"></i>
                                    <span>Maecenas scelerisque nibh vitae turpis</span>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <i class="fa-solid fa-circle-question"></i>
                                    <span>Maecenas scelerisque nibh vitae turpis</span>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <i class="fa-solid fa-circle-question"></i>
                                    <span>Maecenas scelerisque nibh vitae turpis</span>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <i class="fa-solid fa-circle-question"></i>
                                    <span>Maecenas scelerisque nibh vitae turpis</span>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <i class="fa-solid fa-circle-question"></i>
                                    <span>Maecenas scelerisque nibh vitae turpis</span>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Page from '../../page/page.vue';
</script>

<script>

export default {
    name: "insuranceDetails",
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            acc1: [
                {
                    header: 'Maecenas scelerisque nibh vitae turpis',
                    text: 'Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.',
                    open: false   
                },
                {
                    header: 'Maecenas scelerisque nibh vitae turpis',
                    text: 'Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.',
                    open: false   
                },
                {
                    header: 'Maecenas scelerisque nibh vitae turpis',
                    text: 'Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.',
                    open: false   
                }
            ],
            acc2: [
                {
                    header: 'Maecenas scelerisque nibh vitae turpis',
                    text: 'Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.',
                    open: false   
                },
                {
                    header: 'Maecenas scelerisque nibh vitae turpis',
                    text: 'Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.',
                    open: false   
                },
                {
                    header: 'Maecenas scelerisque nibh vitae turpis',
                    text: 'Aliquam viverra arcu. Donec aliquet blandit enim feugiat. Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh egestas tempus turpis, sit amet mattis magna varius non.',
                    open: false   
                },
            ]
        }
    },
    methods: {
        toggleOpen: function (acc, index) {
            acc = acc.map((a, i) => {
                if (index === i) {
                    a.open = !a.open;
                } else {
                    a.open = false;
                }
                return a;
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    @import './insuranceDetails.scss';
</style>