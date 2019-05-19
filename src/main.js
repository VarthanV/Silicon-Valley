// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import Vuetify from 'vuetify';
import firebase from 'firebase';
Vue.config.productionTip = false
Vue.use(Vuetify);



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBYlf1JF88Az-B_HKbdqPsxjM6Y7wmGh40",
    authDomain: "firstvueapp-1a04b.firebaseapp.com",
    databaseURL: "https://firstvueapp-1a04b.firebaseio.com",
    projectId: "firstvueapp-1a04b",
    storageBucket: "firstvueapp-1a04b.appspot.com",
    messagingSenderId: "370623155103",
    appId: "1:370623155103:web:18b96243692ad75f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  Vue.filter('truncate',function(value){
    value=value.slice(0,220);
    return value;
 })
  
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
