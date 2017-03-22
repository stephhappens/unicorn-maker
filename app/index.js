import 'whatwg-fetch';

import App from './app.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount('.app');
