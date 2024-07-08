<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <input v-bind:value="title" @input = "title = $event.target.value" class = "input" type="text" placeholder = "Название поста">
        <input v-bind:value="body" @input = "body = $event.target.value" class = "input" type="text" placeholder="Описание поста">
        <button class = "btn" @click = "createPost">Опубликовать</button>
    </form>
</template>

<script>
    export default{
        props:{
            title:{
                type: String,
                required: true
            },

            body:{
                type: String,
                required: true
            }
        },
        
        data(){
            return{

            }
        },
        emits:['createPost']
    }
</script>

<style>

</style>