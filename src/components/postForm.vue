<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <input v-model="title" class = "input" type="text" placeholder = "Название поста">
        <input v-model="body" class = "input" type="text" placeholder="Описание поста">
        <myButton @click = "create">Опубликовать</myButton>
    </form>
</template>

<script>
    export default{
        emits:['createPost'],
        data(){
            return{
                title:'',
                body:'',
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
form{
    display: flex;
    flex-direction: column;

  }

  .input{
    width: 100%;
    border: 1px solid darkgreen;
    padding: 10px 15px;
    margin-top:15px;
  }
</style>