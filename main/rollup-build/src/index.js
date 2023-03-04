import { createApp } from 'vue';
import App from './app.vue';

document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(App);
    app.moumt('#app');
})