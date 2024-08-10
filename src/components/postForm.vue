<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>
        <myInput 
        v-focus
        v-model="title" 
        placeholder="тема"></myInput>
        <myInput v-model="body" placeholder="описание поста"></myInput>
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
    height: 200px;
    justify-content: space-around;
  }
</style>