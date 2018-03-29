// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.styl'

import axios from 'axios'
Vue.prototype.$http = axios

import myVueEditor from 'my-vue-editor'
let editorConfig = {
  modules: [
    'font',
    'foreColor',
    'bold',
    'italic',
    'underline',
    'linethrough',
    'ul',
    'ol',
    'indent',
    'outdent',
    'align',
    'image',
    'quote',
    'todo'
  ]
}

Vue.use(myVueEditor, editorConfig)

import Element from 'element-ui'
Vue.use(Element)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
