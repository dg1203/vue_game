<template>
  <div>
    <h1>Wybierz poziom</h1>
    <button class="easy" @click="setLevel(1)">Poziom 1 (16 kart)</button>
    <button class="medium" @click="setLevel(2)">Poziom 2 (36 kart)</button>
    <button class="hard" @click="setLevel(3)">Poziom 3 (64 karty)</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Level',
  methods: {
    ...mapActions(['setLevel']),
  },
}
</script>

<style>
  button {
    width: 500px;
    padding: 25px;
    font-size: 36px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    margin-bottom: 25px;
    cursor: pointer;
    border: none;
    transition: .3s;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0px 0px 20px 2px grey;
  }
  button.easy {
    background: #27ae60;
  }
  button.medium {
    background: #f39c12;
  }
  button.hard {
    background: #c0392b;
  }
</style>
