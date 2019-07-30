import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    elements: [
      {
        name: 'angular',
        clicked: false,
        guessed: false,
        image: 'angular.png',
      },
      {
        name: 'angular',
        clicked: false,
        guessed: false,
        image: 'angular.png',
      },
      {
        name: 'vue',
        clicked: false,
        guessed: false,
        image: 'vue.png',
      },
      {
        name: 'vue',
        clicked: false,
        guessed: false,
        image: 'vue.png',
      },
      {
        name: 'react',
        clicked: false,
        guessed: false,
        image: 'react.png',
      },
      {
        name: 'react',
        clicked: false,
        guessed: false,
        image: 'react.png',
      },
      {
        name: 'ember',
        clicked: false,
        guessed: false,
        image: 'ember.png',
      },
      {
        name: 'ember',
        clicked: false,
        guessed: false,
        image: 'ember.png',
      },
      {
        name: 'css',
        clicked: false,
        guessed: false,
        image: 'css3.svg',
      },
      {
        name: 'css',
        clicked: false,
        guessed: false,
        image: 'css3.svg',
      },
      {
        name: 'javascript',
        clicked: false,
        guessed: false,
        image: 'javascript.png',
      },
      {
        name: 'javascript',
        clicked: false,
        guessed: false,
        image: 'javascript.png',
      },
      {
        name: 'svelte',
        clicked: false,
        guessed: false,
        image: 'svelte.png',
      },
      {
        name: 'svelte',
        clicked: false,
        guessed: false,
        image: 'svelte.png',
      },
      {
        name: 'html',
        clicked: false,
        guessed: false,
        image: 'html.png',
      },
      {
        name: 'html',
        clicked: false,
        guessed: false,
        image: 'html.png',
      },
    ],
  },
  getters: {
    getName: state => state.name,
    getElements: state => state.elements,
  },
  mutations: {
    SET_NAME: (state, name) => { state.name = name; },
  },
  actions: {
    setName({ commit }, name) {
      commit('SET_NAME', name);
    },
  },
});
