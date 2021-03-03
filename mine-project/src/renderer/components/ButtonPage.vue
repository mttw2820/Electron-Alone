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
    <div class="bs-component">
      <h3>Group Button - 3*3 Mine</h3>
      <div class="btn-group-vertical">
        <div v-for="(mine, i) in mine_group" v-bind:key="mine" class="btn-group" role="group" aria-level="Basic example">
          <button v-for="(cell, j) in mine" v-bind:key="cell"
           type="button" class="btn btn-info" v-on:click="print_pos(i, j)">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var mx = [1, 0, -1, 0]
var my = [0, 1, 0, -1]
export default {
  name: 'buttonpage',
  data () {
    return {
      title: 'buttonpage',
      single_counter: 0,
      comp_counter: 0,
      group_btn: [0, 0, 0],
      mine_group: [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
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
    },
    where_is_mine: function (x, y) {
      if (this.mine_group[x][y] < 0) return -1
      for (var i = 0; i < 4; i++) {
        var nx = x + mx[i]
        var ny = y + my[i]
        if (nx >= 0 && nx < 3 && ny >= 0 && nx < 3) {
          if (this.mine_group[nx][ny] === -1) return 1
        }
        return 0
      }
    },
    is_mine: function (x, y, event) {
      var cnt = this.where_is_mine(x, y)
      if (cnt < 0) {
        alert('BOMB!')
        document.getElementsByClassName('btn btn-info').setAttribute('class', 'btn btn-info disabled')
      } else {
        event.target.setAttribute(cnt)
      }
    },
    print_pos: function (x, y) {
      alert(x + ' ' + y + ' ' + this.mine_group[x][y])
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
    },
    make_bomb: function () {
      var bx = Math.floor(Math.random() * 3)
      var by = Math.floor(Math.random() * 3)
      this.mine_group[bx][by] = -1
      return true
    }
  }
}
</script>