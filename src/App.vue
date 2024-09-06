<script setup lang="ts">
import locale from 'ant-design-vue/lib/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
</script>

<template>
  <a-config-provider :locale="locale" :autoInsertSpaceInButton="false" componentSize="middle">
    <router-view></router-view>
  </a-config-provider>
</template>

<style scoped></style>
