<template>
  <nav>
    <router-link
      class="underline hover:text-indigo-600"
      v-for="link in links"
      :key="link.id"
      :to="link.path">
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      links: [
        {
          id: 0,
          name: 'Home',
          path: '/Home'
        },
        {
          id: 1,
          name: 'News',
          path: '/News'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
