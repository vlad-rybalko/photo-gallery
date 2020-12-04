import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as fb from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyDyle2tbaLfDUR8qZNkxFT-zWdNN1ehNtw",
      authDomain: "vue-re.firebaseapp.com",
      databaseURL: "https://vue-re.firebaseio.com",
      projectId: "vue-re",
      storageBucket: "vue-re.appspot.com",
      messagingSenderId: "694992011205",
      appId: "1:694992011205:web:1e93741184c70b7e9655ac"
    })
  }
}).$mount('#app')
