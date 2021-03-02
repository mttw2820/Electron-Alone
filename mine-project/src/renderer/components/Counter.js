import Vue from 'vue'

// eslint-disable-next-line no-unused-vars
var CounterVue = new Vue({
  el: '#counter-vue',
  data: {
    counter: 0
  },
  methods: {
    add: function () {
      this.counter += 1
    }
  }
})
