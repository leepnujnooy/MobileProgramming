import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import router from './route/index.js'

Vue.config.productionTip = false

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaE-iC480JMPv_r94kqp-rJxJhr0IMak8",
  authDomain: "mobprac.firebaseapp.com",
  projectId: "mobprac",
  storageBucket: "mobprac.appspot.com",
  messagingSenderId: "592940296101",
  appId: "1:592940296101:web:da6b90c3ddcc498e6e6a4c"
};

//kakao
window.Kakao.init('e212faf0342f3c761d20b063dacfc9fa');
// Initialize Firebase
initializeApp(firebaseConfig);

new Vue({  
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
