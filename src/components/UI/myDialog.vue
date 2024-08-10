<template>
    <div class="dialog" v-show="show" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import toggleMixin from '@/mixins/toggleMixin';
    export default{
        name: 'myDialog',

        mixins:[toggleMixin]
    }
</script>

<style scoped>
    .dialog{
        display: flex;
        justify-content: center;
        align-items: center;
        position:fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;
        background: rgba(0,0,0, 0.5)
    }

    .dialog__content{
        margin:auto;
        background: white;
        border-radius: 12px;
        padding:20px;
    }
</style>