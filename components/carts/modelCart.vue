<template>
  <div class="modal w-1/2">
<!--    <p class="truncate underline">-->
      <slot name="name"></slot>
<!--    </p>-->
    <p style="color: red">jbk</p>
<!--    <b-modal v-model="active">-->
<!--        <div>-->
<!--          {{ data.name }}-->
<!--        </div>-->
<!--    </b-modal>-->
  </div>
</template>

<script>
export default {
  name: "modelCart",
  props: {
    data: Object,
    active: Boolean,
  }
}
</script>

<style scoped>

</style>
