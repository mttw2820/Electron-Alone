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
    <div class="bs-component">
      <h3>Group Button - Random Bomb</h3>
      <p> Bomb Button is button #{{bomb_btn + 1}} </p>
      <div class="bs-component mb-3">
        <div class="btn-group" role="group" aria-level="Basic example">
          <button v-for="(num, index) in group_btn" v-bind:key="num" 
          type="button" class="btn btn-primary" v-on:click="isBomb(num)">
            {{index+1}}
          </button>
        </div>
      </div> 
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
      comp_counter: 0,
      group_btn: [0, 0, 0]
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
    },
    isBomb: function (num) {
      if (num === -1) {
        alert('BOMB!')
      }
    }
  },
  computed: {
    double_counter: function (event) {
      return this.comp_counter * 2
    },
    bomb_btn: function (event) {
      var rand = Math.floor(Math.random() * 3)
      this.group_btn[rand] = -1
      return rand
    }
  }
}
</script>