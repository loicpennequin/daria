import { createApp } from 'vue';
import App from './App.vue';
import { createDariaUi } from '@/index';

const app = createApp(App).use(createDariaUi());
app.mount('#app');
