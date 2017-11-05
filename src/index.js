import Vue from 'vue'
import App from './components/App.vue'
import store from './store'

let wordLib = document.createElement("div")
wordLib.setAttribute('id', 'wordLibApp')
wordLib.setAttribute('style', 'padding: 0; margin: 0;')
document.body.appendChild(wordLib)

/* eslint-disable no-new */
new Vue({
  el: '#wordLibApp',
  store,
  render: h => h(App)
})
