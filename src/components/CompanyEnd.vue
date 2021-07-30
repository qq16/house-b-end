<template>
  <Aside msg="" />
  <HomeHeader msg="" />
  <BasicInfoForm msg="" />
</template>

<script>
import Aside from "./Aside.vue";
import HomeHeader from "./HomeHeader.vue";
import BasicInfoForm from "./BasicInfoForm.vue";

export default {
  name: "CompanyEnd",
  components: {
    Aside,
    HomeHeader,
    BasicInfoForm,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>