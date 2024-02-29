import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import { DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
});

app
  .use(DatePicker)
  .mount('#app')
