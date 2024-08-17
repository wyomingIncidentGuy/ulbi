import axios from 'axios';
export const postModule = {
    state: ()=>({
        
        posts: [],
  
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
    }),

    getters:{
        sortedPosts(state){
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
        },

        searchedSortedPosts(state, getters){
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuiery.toLowerCase()));
        }
    },

    mutations:{
        setPost(state, posts){
            state.posts = posts;
        },

        setLoading(state, bool){
            state.isPostLoading = bool;
        },

        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort;
        },

        setSearchQuiery(state, searchQuiery){
            state.searchQuiery = searchQuiery;
        },

        setPage(state, page){
            state.page = page;
        },

        setTotalPage(state, totalPage){
            state.totalPage = totalPage;
        },
    },

    actions:{
        async fetchPosts({state, commit }){
            try {
              commit('setLoading', true);
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params:{
                  _page: state.page,
                  _limit: state.limit
                }
              });
              commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / this.limit));
              commit('setPost', response.data);
            } 
            catch (error) {
              console.log(error);
            }
            finally{
              commit('setLoading', false);
            }
          },
  
          async loadPosts({state, commit}){
            try {
              commit('setPage', state.page+=1);
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params:{
                  _page: state.page,
                  _limit: state.limit
                }
              });
              commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / this.limit));
              commit('setPost', [...state.posts, ...response.data]);
            } 
            catch (error) {
                console.log(error);
            }
        },
    },

    namespaced: true
}