<template>
    <postItem 
    v-for="post in posts"
    :post="post"
    />
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