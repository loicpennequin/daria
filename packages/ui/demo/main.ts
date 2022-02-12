import { createApp } from 'vue';
import App from './app.vue';
import {
  createDariaUi,
  core,
  layout,
  drawer,
  accordion,
  transitions
} from '@/index';

const app = createApp(App).use(
  createDariaUi({
    components: {
      ...core,
      ...layout,
      ...drawer,
      ...accordion,
      ...transitions
    }
  })
);
app.mount('#app');
