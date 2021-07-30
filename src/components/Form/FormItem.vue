<template>
  <label for="fullname" class="flex items-center space-x-1 font-normal">
    <div class="w-190px text-right">
      <span class="text-red-600">*</span>
      <span>{{ labelText }}</span>
    </div>
    <input
      type="text"
      name="fullname"
      class="w-120 h-9 outline-none border-gray-300 border rounded"
    />
  </label>
</template>

<script>
export default {
  name: "FormItem",
  props: {
    labelText: String,
  },
};
</script>

<style scoped>
</style>
