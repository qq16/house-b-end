<template>
  <aside
    class="
      flex flex-col
      fixed
      z-10
      text-white
      w-150px
      h-screen
      top-0
      left-0
      bg-panel
    "
  >
    <div style="background-color: #535a6c" class="pt-11 pb-3">
      <div class="text-lg font-bold mb-12">企业端</div>
      <section class="flex flex-col items-start space-y-7 pl-3">
        <div class="flex items-center space-x-3">
          <font-awesome-icon class="text-xl" :icon="['fas', 'list']" />
          <div class="font-medium">基本信息</div>
        </div>
        <div class="flex items-center space-x-3">
          <font-awesome-icon class="text-xl" :icon="['fas', 'list']" />
          <div class="font-medium">员工导入</div>
        </div>
        <div class="flex items-center space-x-3">
          <font-awesome-icon class="text-xl" :icon="['fas', 'list']" />
          <div class="font-medium">租房申请</div>
        </div>
        <div class="flex items-center space-x-3">
          <font-awesome-icon class="text-xl" :icon="['fas', 'list']" />
          <div class="font-medium">到期提醒</div>
        </div>
        <div class="flex items-center space-x-3">
          <font-awesome-icon class="text-xl" :icon="['fas', 'list']" />
          <div class="font-medium">退租申请</div>
        </div>
        <div class="flex items-center space-x-3">
          <font-awesome-icon class="text-xl" :icon="['fas', 'list']" />
          <div class="font-medium">企业报表</div>
        </div>
      </section>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Aside",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>
