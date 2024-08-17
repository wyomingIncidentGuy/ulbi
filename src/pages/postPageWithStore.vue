<template>
    <div>
      <myInput 
        :model-value="searchQuiery"
        @update:model-value="setSearchQuiery"
        placeholder="поиск"
        v-focus
      />
      <div class="app__buttons">
          <myButton @click="showDialog">создать пост</myButton>
          <mySelect 
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
            :options="sortOptions"
          />
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
      <div v-intersection="loadPosts" class="observer"></div>
  
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
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
  
    export default{
      data() {
        return {
          dialogVisible: false,
        }
      },
  
        methods: {
          ...mapMutations({
            setPage:'post/setPage',
            setSearchQuiery:'post/setSearchQuiery',
            setSelectedSort: 'post/setSelectedSort'
          }),
          
          ...mapActions({
            loadPosts: 'post/loadPosts',
            fetchPosts: 'post/fetchPosts'
          }),

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
        },
  
        computed: {
          ...mapState({
            posts: state => state.post.posts,
            isPostLoading: state => state.post.isPostLoading,
            selectedSort:state => state.post.selectedSort,
            searchQuiery:state => state.post.searchQuiery,
            page:state => state.post.page,
            limit:state => state.post.limit,
            totalPage:state => state.post.totalPage,
            sortOptions: state => state.post.sortOptions
          }),

          ...mapGetters({
            sortedPosts:'post/sortedPosts',
            searchedSortedPosts:'post/searchedSortedPosts'
          })
        },
        
        watch: {
          // page(){
          //   this.fetchPosts();
          // }
        }
  
    }
  </script>
  
  <style scoped>
    body {
     -webkit-font-smoothing: antialiased;
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