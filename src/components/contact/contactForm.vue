<template>
    <div class="contact">
        <div class="container">
            <div class="row">
                <div class="col-xl-4">
                    <p>Qayta aloqa</p>
                </div>
                <div class="col-xl-8">
                    <form>
                        <div class="row">
                            <div class="col-xl-6">
                                <input type="text" placeholder="Your Name" v-model="name">
                            </div>
                            <div class="col-xl-6">
                                <input type="email" placeholder="Your Email" v-model="email">
                            </div>
                            <div class="col-xl-6">
                                <input type="text" placeholder="Phone" v-model="phone">
                            </div>
                            <div class="col-xl-6">
                                <input type="text" placeholder="Subject" v-model="subject">
                            </div>
                            <div class="col-xl-12">
                                <textarea v-model="message" placeholder="Message" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>

            <div class="local">
                <div class="inner">
                    <h3>Find a local insurance agent</h3>
                    <div class="call">
                        <div class="phone">
                            <i class="fa-solid fa-phone-flip"></i>
                            <div class="call-inner">
                                <a href="tel:+998 71 205 19 19">+998 71 205 19 19</a>
                                <p>Call to Our Experts</p>
                            </div>
                        </div>
                        <div class="quote">
                            <a href="#" class="thm-btn cta-one__btn">Get a Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import './contactForm.scss';
</style>