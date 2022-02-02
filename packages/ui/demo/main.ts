import { createApp } from 'vue';
import App from './app.vue';
import { createDariaUi } from '@/index';

const app = createApp(App).use(createDariaUi());
app.mount('#app');
