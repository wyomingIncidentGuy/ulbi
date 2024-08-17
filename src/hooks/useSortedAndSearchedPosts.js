import {ref, computed} from 'vue';

export function useSortedAndSearchedPosts(sortedPosts){
    const searchQuiery = ref('');
    const sortedAndSearchedPosts = computed(() => {
        return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchQuiery.value.toLowerCase()));
    });
    return{
        searchQuiery, sortedAndSearchedPosts
    }
}