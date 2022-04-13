import { createApp } from 'vue';
import DariaUI from '@daria/ui';
import App from './app.vue';
import icons from './icons';

createApp(App).use(DariaUI({ icons })).mount('#app');
