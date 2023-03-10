<template>
    <div class="singleProcess" :style="process.style">
        <div class="icon-box">
            <div class="icon">
                <i :class="process.icon"></i>
            </div>
            <div class="count">
                <p>{{ process.count }}</p>
            </div>
        </div>
        <div class="content">
            <h3>{{ process.primaryText }}</h3>
            <p>{{ process.secondaryText }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['process']
}
</script>

<style lang="scss" scoped>
    @import './singleProcess.scss';
</style>