<template>
    <div class = "navbar">
        <h1 @click="$router.push('/')">Vue Blog</h1>
        <div class="navbar__btns">
            <myButton @click="$router.push('/posts')">Посты</myButton>
            <myButton @click = "$router.push('/about')">О нас</myButton>
        </div>
    </div>
</template>

<script>
export default {
    name:'navBar'
}
</script>

<style scoped>
    .navbar{
        height: 50px;
        background-color: teal;
        box-shadow: 2px 2px 4px gray;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    h1{
        cursor: pointer;
    }
</style>