<template>
  <div class = "app">
    <myInput 
    v-model="searchQuiery"
    />
    <div class="app__buttons">
        <myButton @click="showDialog">создать пост</myButton>
        <mySelect 
        v-model="selectedSort"
        :options="sortOptions"
        />
    </div>

    <myDialog v-model:show="dialogVisible">
      <postForm 
      @createPost="createPost"
      />
    </myDialog>

    <postList 
    :posts="searchedSortedPosts"
    @remove="removePost"
    v-if="!isPostLoading"
    />
    
    <div v-else>Идет загрузка...</div>
    <div ref="observer" class="observer"></div>

    <!-- <div class="page__wrapper">
      <div
      v-for="pageNumber in totalPage"
      :key="pageNumber"
      class="page"
      :class="{
        'current__page':page === pageNumber
      }"
      @click="changePage(pageNumber)"
      >{{ pageNumber }}</div>
    </div> -->

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
        isPostLoading: false,
        selectedSort:'',
        searchQuiery:'',
        page:1,
        limit:10,
        totalPage:0,

        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'}
        ]

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
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params:{
                _page: this.page,
                _limit: this.limit
              }
            });
            this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
            this.posts = response.data;
          } 
          catch (error) {
            alert('Ошибка на стороне сервера');
          }
          finally{
            this.isPostLoading = false;
          }
        },

        async floadPosts(){
          try {
            this.isPostLoading = true;
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params:{
                _page: this.page,
                _limit: this.limit
              }
            });
            this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit);
            this.posts = [...this.posts, ...response.data];
          } 
          catch (error) {
            alert('Ошибка на стороне сервера');
          }
          finally{
            this.isPostLoading = false;
          }
        },

        // changePage(pageNumber){
        //   this.page = pageNumber;
        // }

      },

      components: {
        postList,
        postForm
      },

      mounted(){
        this.fetchPosts();
        const options = {
          rootMargin: "0px",
          threshold: 1.0,
        };

        const callback = function(entries, observer){
          if(entries[0].isIntersecting){
            console.log('intersected');
          }
        }

        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
      },

      computed: {
        sortedPosts(){
          return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
        },

        searchedSortedPosts(){
          return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuiery.toLowerCase()));
        }
      },
      
      watch: {
        // page(){
        //   this.fetchPosts();
        // }
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

  .app__buttons{
    display:flex;
    justify-content: space-between;
  }

  .page__wrapper{
    display: flex;
  }

  .page{
    padding: 10px;
    border: solid black 1px;
    cursor: pointer;
  }

  .current__page{
    border: solid red 1px;
    cursor: pointer;
  }

  .observer{
    height: 30px;
    background-color: green;
  }
</style>