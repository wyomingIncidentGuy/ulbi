<template>
    <div class="post" v-for="post in posts">
        <div><strong>Название:</strong>{{ post.title }}</div>
        <div><strong>Описание:</strong>{{ post.body }}</div>
    </div>
</template>

<script>
    export default{
        props: {
            posts: {
                type: Array,
                required: true
            }
        },
        data(){
            return{
                
            }
        }
    }
</script>

<style>

</style>