import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './index.css'
const app = createApp(App)
app.mount('#app');
app.use(Antd)
