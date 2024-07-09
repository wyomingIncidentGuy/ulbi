<template>
  <div class = "app">
      <postForm 
      @createPost="createPost"
      />

      <postList 
      :posts="posts"
      />
  </div>
</template>

<script>
  import postList from '@/components/postList.vue';
  import postForm from '@/components/postForm.vue';

  export default{
    data() {
      return {

        posts: [
          {id: 1, title:'Javascript 1', body: 'post description 1'},
          {id: 2, title:'Javascript 2', body: 'post description 2'},
          {id: 3, title:'Javascript 3', body: 'post description 3'},
          {id: 4, title:'Javascript 4', body: 'post description 4'}
        ],

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
        }

      },

      components: {
        postList,
        postForm
      }

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
</style>