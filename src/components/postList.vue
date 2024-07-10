<template>
    <div v-show="posts.length > 0">
        <postItem 
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    />
    </div>
    <h1 v-show="posts.length==0">Постов нет</h1>
</template>

<script>
    import postItem from './postItem.vue';
    export default{

        components: {
            postItem
        },

        props: {
            posts: {
                type: Array,
                required: true
            }
        },
        
    }
</script>

<style>

</style>