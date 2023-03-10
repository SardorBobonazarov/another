<template>
    <div class="branch">
        <div class="name">
            <i class="fa-solid fa-location-pin"></i>
            <h4>{{ branch.name }}</h4>
        </div>
        <hr>
        <div class="data">
            <div class="address">
                <b>Manzil: </b>
                <span>{{ branch.address }}</span>
            </div>
            <div class="phone">
                <b>Telefon: </b>
                <span>{{ branch.phone }}</span>
            </div>
        </div>
        <div class="map">
            <a :href="branch.link">
                <i class="fa-solid fa-map"></i>
                <span>Xaritadan ko'rish</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['branch']
}
</script>

<style lang="scss" scoped>
    @import './singleBranch.scss';
</style>