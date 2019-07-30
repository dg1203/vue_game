<template>
  <div>
    <h1>Podaj swoje imię aby rozpocząć grę!</h1>
    <input v-model="name" type="text" />
    <router-link v-if="name.length > 3" :to="{ name: 'game' }">Dalej</router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'StartGame',
  methods: {
    ...mapActions(['setName']),
  },
  data() {
    return {
      name: '',
    };
  },
  beforeDestroy() {
    this.setName(this.name);
  },
};
</script>

<style>
  input {
    height: 80px;
    width: 700px;
    padding: 15px;
    font-size: 36px;
  }
  a {
    display: block;
    margin-top: 25px;
    width: 200px;
    background: #44bd32;
    color: white;
    text-transform: uppercase;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    padding: 25px;
  }
</style>
