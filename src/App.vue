<template>
  <CompanyEnd msg="Welcome to Your Vue.js App" />
</template>

<script>
import CompanyEnd from "./components/CompanyEnd.vue";

export default {
  name: "App",
  components: {
    CompanyEnd,
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 100px;
  padding-left: 150px;
}
</style>
