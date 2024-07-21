<template>
    <div v-if="posts.length > 0">
        <transition-group name="post-list">
            <postItem 
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
            />
        </transition-group>
        
    </div>
    <h1 v-else>Постов нет</h1>
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
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all .5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateZ(30px);
}
.post-list-move {
  transition: transform .5s ease;
}
</style>