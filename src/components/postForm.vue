<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <input v-model="title" class = "input" type="text" placeholder = "Название поста">
        <input v-model="body" class = "input" type="text" placeholder="Описание поста">
        <button class = "btn" @click = "create">Опубликовать</button>
    </form>
</template>

<script>
    export default{
        emits:['createPost'],
        data(){
            return{
                title:'',
                body:''
            }
        },
        methods:{
            create(){
                this.$emit('createPost', this.title, this.body);
                this.title='';
                this.body='';
            }
        }
    }
</script>

<style>

</style>