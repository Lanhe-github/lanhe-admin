<script setup lang="ts" name="layout">
import { useAppStore } from '@/stores'
import TopHeader from './template/topHeader.vue'
import LeftMenu from './template/leftMenu.vue'

const appStore = useAppStore()

console.log(appStore, appStore.collapsibleMenu)
</script>

<template>
  <a-layout class="w-[100%] h-[100%]">
    <a-layout-sider v-model:collapsed="appStore.collapsibleMenu" :trigger="null" collapsible>
      <LeftMenu></LeftMenu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header
        style="
          height: 50px;
          background: #fff;
          line-height: normal;
          padding: 0;
          border: 1px solid var(--color-border-bottom);
        "
      >
        <TopHeader></TopHeader>
      </a-layout-header>

      <a-layout-content style="background-color: white"> Content 微软雅黑</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped></style>
