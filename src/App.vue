<template>
  <div class = "app">
      <postForm 
      :title="title" 
      :body="body" 
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

        title: '',
        body:'',

      }
     
    },

      methods: {

        createPost(){
          const newPost = {
            id:Date.now(),
            title:this.title,
            body:this.body
          }
          this.posts.push(newPost);
          this.title = '',
          this.body = ''
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

  .post{
    margin-top:15px;
    padding:15px;
    border:2px solid darkgreen;
  }

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

  .btn{
    align-self:flex-end;
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color:darkgreen;
    border: 1px solid darkgreen;
  }
</style>