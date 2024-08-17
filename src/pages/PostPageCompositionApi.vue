<template>
    <div>
      <myInput 
      v-focus
      v-model="searchQuiery"
      />
      <div class="app__buttons">
          <myButton>создать пост</myButton>
          <mySelect 
          v-model="selectedSort"
          :options="sortOptions"
          />
      </div>
  
      <myDialog v-model:show="dialogVisible">
        <postForm 
        />
      </myDialog>
  
      <postList 
      :posts="posts"
      v-if="!isPostLoading"
      />
      
      <div v-else>Идет загрузка...</div>
    </div>
  </template>
  
  <script>
    import postList from '@/components/postList.vue';
    import postForm from '@/components/postForm.vue';
    import {ref} from 'vue';
    import { usePosts } from '@/hooks/usePost';
    import { useSortedPosts } from '@/hooks/useSortedPosts';
    import { useSortedAndSearchedPosts } from '@/hooks/useSortedAndSearchedPosts';
    import axios from 'axios';
  
    export default{
      data() {
        return {
          dialogVisible: false,
          sortOptions: [
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По содержимому'}
          ]
        }
       
      },

      components: {
          postList,
          postForm
        },

      setup(props){
        const {posts, isPostLoading, totalPage} = usePosts(10)
        const {sortedPosts, selectedSort} = useSortedPosts(posts)
        const {searchQuiery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

        return{
            posts,
            totalPage,
            isPostLoading,
            sortedPosts,
            selectedSort,
            searchQuiery, 
            sortedAndSearchedPosts
        }
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