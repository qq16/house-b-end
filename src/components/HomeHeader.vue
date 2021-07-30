<template>
  <header
    class="
      fixed
      z-0
      top-0
      left-0
      flex
      justify-end
      items-center
      h-100px
      bg-header
      w-screen
      font-bold
      text-lg
      pr-12
      space-x-6
    "
  >
    <section class="flex items-center space-x-2">
      <font-awesome-icon class="text-3xl" :icon="['fas', 'user-circle']" />
      <div>张三</div>
    </section>
    <div>退出</div>
  </header>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>
