export const postModule = {
    state: ()=>({
        
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
    }),

    getters:{

    },

    mutations:{
        setPost(state, posts){
            state.posts = posts;
        }
    },

    actions:{

    }
}