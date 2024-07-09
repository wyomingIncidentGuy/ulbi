<template>
    <div class="post">
        <div>
            <div><strong>Название:</strong>{{ post.title }}</div>
            <div><strong>Описание:</strong>{{ post.body }}</div>
        </div>
        <div class="post__buttons">
            <myButton
            class="btn"
            @click="delete"
            >удалить</myButton>
        </div>
    </div>
</template>

<script>
    import myButton from './UI/myButton.vue';
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

        components: {
            myButton
        }
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