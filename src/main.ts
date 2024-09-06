import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores'
import Antd from 'ant-design-vue'
import './assets/styles/index.less'
import './plugins/windiCss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Antd).mount('#app')
