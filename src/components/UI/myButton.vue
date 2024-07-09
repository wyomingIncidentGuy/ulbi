<template>
    <button @click="importedMethod('create')">
        <slot></slot>
    </button>
</template>

<script>
    export default{
        emits: ['create'],
        props:{
            
        },

        methods: {
            importedMethod(methodName){
                this.$emit(methodName)
            }
        }

    }
</script>

<style>
    .btn{
    align-self:flex-end;
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color:darkgreen;
    border: 1px solid darkgreen;
  }
</style>