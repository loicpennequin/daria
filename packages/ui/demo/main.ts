import { createApp } from 'vue';
import App from './app.vue';
import { createDariaUi, core, layout, drawer, transitions } from '@/index';

const app = createApp(App).use(
  createDariaUi({
    components: {
      ...core,
      ...layout,
      ...drawer,
      ...transitions
    }
  })
);
app.mount('#app');
