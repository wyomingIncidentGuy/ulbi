<template>
  <div class = "app">
      <myButton @click="showDialog">создать пост</myButton>
      <myDialog v-model:show="dialogVisible">
        <postForm 
        @createPost="createPost"
        />
      </myDialog>

      <postList 
      :posts="posts"
      @remove="removePost"
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

        dialogVisible:false

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