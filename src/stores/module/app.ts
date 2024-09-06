import { defineStore } from 'pinia'
import type { IAppState } from '@/stores/types/appType'

export const useAppStore = defineStore('app', {
  state: (): IAppState => {
    return {
      // 侧边栏是否折叠
      collapsibleMenu: false
    }
  },
  persist: true //true 表示开启持久化保存
})
