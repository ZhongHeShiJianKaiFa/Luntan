import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import {VueMasonryPlugin} from "vue-masonry";
Vue.config.productionTip = false
Vue.use(VueMasonryPlugin)


//引入路由
import router from './route/index'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
