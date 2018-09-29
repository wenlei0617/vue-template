<template>
    <div class="layout">
        <header class="layout-header">
            <h1>{{name}}</h1>
        </header>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.layout{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    &-header{
        height: 50px;
        width: 100%;
        position: fixed;
    }
}
</style>


