import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/global.css';
import firebase from '@/plugins/firebase.js';

const app = createApp(App);

app.use(router);
app.use(firebase);
app.mount('#app');
