<script lang="ts" setup name="topHeader">
import { ref } from 'vue'
import { useAppStore } from '@/stores'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

const appStore = useAppStore()

/**
 * @method 侧边栏折叠状态改变
 */
const collapsibleMenuChange = () => {
  appStore.collapsibleMenu = !appStore.collapsibleMenu
  console.log(appStore.collapsibleMenu)
}
</script>

<template>
  <div class="p-x-10px">
    <div>
      <menu-unfold-outlined
        v-if="appStore.collapsibleMenu"
        class="trigger"
        @click="collapsibleMenuChange"
      />
      <menu-fold-outlined v-else class="trigger" @click="collapsibleMenuChange" />
    </div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped></style>
