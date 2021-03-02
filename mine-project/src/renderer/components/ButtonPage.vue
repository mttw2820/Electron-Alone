<template>
  <div class="container">
    <div class="bs-component">
      <h2>BUTTON PAGE</h2><br>
    </div>
    <div class="bs-component">
      <h3>Single button - alert</h3>
      <p>
        <button type="button" class="btn btn-outline-primary" v-on:click="say('hi')">say HI</button>
      </p>
    </div>
    <div class="bs-component">
      <h3>Single button - count</h3>
      <p> You Clicked button {{single_counter}} times.</p>
      <p>
        <button type="button" class="btn btn-outline-success" v-on:click="count_click()">Count ME</button>
      </p>
    </div>
    <div class="bs-component">
      <h3>Single button - count</h3>
      <p>Click : {{comp_counter}} | Double : {{double_counter}} </p>
      <p>
        <button type="button" class="btn btn-outline-success" v-on:click="event_comp()">Count ME</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttonpage',
  data () {
    return {
      title: 'buttonpage',
      single_counter: 0,
      comp_counter: 0
    }
  },
  methods: {
    say: function (msg) {
      alert(msg)
    },
    count_click: function () {
      this.single_counter += 1
    },
    event_comp: function () {
      this.comp_counter += 1
    }
  },
  computed: {
    double_counter: function () {
      return this.comp_counter * 2
    }
  }
}
</script>