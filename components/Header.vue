<template>
  <div class="header flex justify-between">
    <nav>
      <router-link class="underline hover:text-indigo-600" to="/Home">Home</router-link>
      <router-link class="underline hover:text-indigo-600" to="/News">News</router-link>
      <router-link class="underline hover:text-indigo-600" to="/News">Random</router-link>
      <router-link class="underline hover:text-indigo-600" to="/SinglePage">single page</router-link>
    </nav>
    <div class="user inline-flex">
      <p class="mr-5">admin</p>
      <p>admin@gmail.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
.header {
  color: #fff;
}
</style>
