import { createApp } from 'vue'
import App from './App.vue'
import './assets/basic.css'
import 'amfe-flexible';
import vuex from './Store/index'
import router from './Router/router'
import 'vant/es/toast/style';
import './api/mock'
import { Button } from 'vant';
// 2. 引入组件样式
// import 'vant/lib/index.css';

const app = createApp(App)

app.use(router).use(Button).use(vuex)
app.mount('#app')

