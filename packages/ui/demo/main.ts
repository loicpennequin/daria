import { createApp } from 'vue';
import App from './app.vue';
import {
  createDariaUi,
  core,
  layout,
  drawer,
  accordion,
  forms,
  transitions
} from '@/index';

const app = createApp(App).use(
  createDariaUi({
    components: {
      ...core,
      ...layout,
      ...drawer,
      ...accordion,
      ...transitions,
      ...forms
    },
    config: {
      DButton: {
        colorScheme: 'indigo'
      },
      DFormControl: {
        colorScheme: 'indigo'
      }
    }
  })
);
app.mount('#app');
