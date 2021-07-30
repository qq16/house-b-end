<template>
  <main
    class="
      flex flex-col
      items-center
      justify-center
      self-center
      border-l-2 border-gray-400
    "
  >
    <div
      class="text-base font-bold mb-9 pt-9 pb-4 w-2/3 border-b border-gray-200"
    >
      企业基本信息
    </div>
    <section class="flex flex-col items-start space-y-1 text-sm">
      <FormItem labelText="企业全称：" />
      <FormItem labelText="统一社会信用代码：" />
      <FormItem labelText="企业类型：" />
      <FormItem labelText="行业类型：" />
      <FormItem labelText="企业邮箱：" />
      <FormItem labelText="法定代表人姓名：" />
      <FormItem labelText="联系人（经办人）姓名：" />
      <FormItem labelText="联系人（经办人）手机号码：" />
      <FormItem labelText="办公地址：" />
      <div class="flex text-white ml-194px pt-2 space-x-3">
        <button class="bg-primary text-base py-1 px-9 font-bold rounded-md">
          保存
        </button>
        <button class="bg-primary text-base py-1 px-9 font-bold rounded-md">
          重置
        </button>
      </div>
    </section>
    <section class="flex flex-col items-start space-y-1 text-sm pb-3">
      <h2
        class="
          text-left
          border-b border-gray-200
          w-2/3
          text-base
          font-bold
          mb-3
          pt-5
        "
      >
        设定企业验证码
      </h2>
      <FormItem labelText="企业验证码：" />
      <div class="flex text-white ml-194px pt-2 space-x-3">
        <button class="bg-primary text-base py-1 px-9 font-bold rounded-md">
          保存
        </button>
        <button class="bg-primary text-base py-1 px-9 font-bold rounded-md">
          重置
        </button>
      </div>
    </section>
    <section class="flex flex-col items-start space-y-1 text-sm pb-3">
      <h2
        class="
          text-left
          border-b border-gray-200
          w-2/3
          text-base
          font-bold
          mb-3
        "
      >
        修改密码
      </h2>
      <FormItem labelText="原密码：" />
      <FormItem labelText="新密码：" />
      <FormItem labelText="确认新密码：" />
      <div class="flex text-white ml-194px pt-2 space-x-3">
        <button class="bg-primary text-base py-1 px-9 font-bold rounded-md">
          保存
        </button>
        <button class="bg-primary text-base py-1 px-9 font-bold rounded-md">
          重置
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import FormItem from "./Form/FormItem.vue";

export default {
  name: "BasicInfoForm",
  components: {
    FormItem,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
</style>
