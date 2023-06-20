<template>
  <div class="header flex justify-between">
    <nav>

      <!--main menu links-->
      <router-link
        class="underline hover:text-indigo-600"
        v-for="link in links"
        :key="link.id"
        :to="link.path">
        {{ link.name }}
      </router-link>

      <!--random link-->
      <router-link
        class="underline hover:text-indigo-600"
        to="/News">Random
      </router-link>

    </nav>
<!--    <div class="user inline-flex">-->
<!--      <p class="mr-5">{{ user.username }}</p>-->
<!--      <p>{{ user.email }}</p>-->
<!--    </div>-->
  </div>
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      links: [
        {
          id: 0,
          name: 'Home',
          path: '/'
        },
        {
          id: 1,
          name: 'News',
          path: '/News'
        },
        {
          id: 2,
          name: 'single page',
          path: '/Single'
        }
      ]
    }
  }
}
</script>

<style scoped>
.header {
  color: #fff;
}
</style>
