<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default{
        name: 'myButton',
    }
</script>

<style>
    button{
    align-self:flex-end;
    padding: 10px 15px;
    background: none;
    color:darkgreen;
    border: 1px solid darkgreen;
    cursor:pointer;
  }
</style>