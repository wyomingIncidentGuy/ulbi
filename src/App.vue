<template>
  <div class = "app">
    <div class="app__buttons">
        <myButton @click="showDialog">создать пост</myButton>
        <mySelect></mySelect>
    </div>

    <myDialog v-model:show="dialogVisible">
      <postForm 
      @createPost="createPost"
      />
    </myDialog>

    <postList 
    :posts="posts"
    @remove="removePost"
    v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
  import postList from '@/components/postList.vue';
  import postForm from '@/components/postForm.vue';
  import axios from 'axios';

  export default{
    data() {
      return {

        posts: [],

        dialogVisible: false,
        isPostLoading: false

      }
     
    },

      methods: {

        createPost(title, body){
          const newPost = {
            id:Date.now(),
            title:title,
            body:body
          };

          this.posts.push(newPost);
          this.dialogVisible = false;
        },

        removePost(post){
          this.posts = this.posts.filter(p => p.id != post.id);
        },

        showDialog(){
          this.dialogVisible = !this.dialogVisible;
        },

        async fetchPosts(){
          try {
            this.isPostLoading = true;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
            this.posts = response.data;
            this.isPostLoading = false;
          } 
          catch (error) {
            alert('Ошибка на стороне сервера');
          }
          finally{
            this.isPostLoading = false;
          }
        }

      },

      components: {
        postList,
        postForm
      },

      mounted(){
        this.fetchPosts();
      },

  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
   -webkit-font-smoothing: antialiased;
  }

  .app{
    padding: 20px;
  }
  
  button {
   cursor: pointer;
  }

  .app__buttons{
    display:flex;
    justify-content: space-between;
  }
</style>