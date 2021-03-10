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
      <h3>Single button - double count</h3>
      <p>Click : {{ comp_counter }} | Double : {{double_counter}} </p>
      <p>
        <button type="button" class="btn btn-outline-success" v-on:click="event_comp()">Count ME</button>
      </p>
    </div>

    <div class="bs-component">
      <h3>Group Button - Random Bomb</h3>
      <p> Bomb Button is button #{{bomb_btn + 1}} </p>
      <div class="bs-component mb-3">
        <div class="btn-group" role="group" aria-level="Basic example">
          <button v-for="(num, index) in group_btn" :key="num" 
          type="button" class="btn btn-primary" v-on:click="isBomb(num)">
            {{index+1}}
          </button>
        </div>
      </div> 
    </div>

    <div class="bs-component">
      <h3>Group Button - 3*3 Mine</h3>
      <div class="btn-group-vertical">
        <div v-for="(mine, i) in mine_group" :key="mine" class="btn-group" role="group" aria-level="Basic example">
          <button v-for="(cell, j) in mine" :key="cell"
           type="button" class="btn btn-info" v-on:click="is_mine(i, j, $event)"> X
          </button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script src="./js/button-page.js"></script>