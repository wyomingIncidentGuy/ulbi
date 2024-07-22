<template>
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Название:</strong>{{ post.title }}</div>
            <div><strong>Описание:</strong>{{ post.body }}</div>
        </div>
        <div class="post__buttons">
            <myButton @click="$emit('remove', post)">удалить</myButton>
        </div>
    </div>
</template>

<script>
    export default{
        emits:[],

        props:{
            post:{
                type: Object,
                required: true
            }
        },

        methods:{
            delete(){

            }
        },
    }
</script>

<style>
.post{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:15px;
    padding:15px;
    border:2px solid darkgreen;
  }
</style>