<template>
  <div>
    <h1>Witaj {{ getName }}</h1>
    <div class="container">
      <div v-for="(el, index) in elements" :key="index" class="element" v-bind:class="{'clicked': (el.clicked || el.guessed)}" @click="elementClick(index)">
        <div class="flip-card-inner">
          <div class="flip-card-front">
          </div>
          <div class="flip-card-back">
            <img :src="imagePath(el.image)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { setTimeout } from 'timers';

export default {
  name: 'Game',
  computed: mapGetters(['getName', 'getElements']),
  data() {
    return {
      elements: [],
      indexes: []
    };
  },
  created() {
    this.elements = this.shuffle(this.getElements);
  },
  methods: {
    imagePath(image) {
      // eslint-disable-next-line
      return require(`../assets/${image}`);
    },
    shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    elementClick(index) {
      if (this.indexes.length < 2) {
        if (!this.elements[index].clicked) {
          this.elements[index].clicked = !this.elements[index].clicked;
          this.indexes.push(index);
        }
        if (this.indexes.length === 2) {
          setTimeout(() => {
            if (this.elements[this.indexes[0]].name === this.elements[this.indexes[1]].name) {
              this.elements[this.indexes[0]].guessed = true;
              this.elements[this.indexes[1]].guessed = true;
            } else {
              this.elements[this.indexes[0]].clicked = false;
              this.elements[this.indexes[1]].clicked = false;
            }
            this.indexes = [];
          }, 1000);
        }
      }
    }
  },
};
</script>

<style>
  .container {
    display: flex;
    width: 800px;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
  }
  .element {
    display: flex;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    cursor: pointer;
    box-sizing: border-box;
    transition: .3s;
    overflow: hidden;
  }
  .element img {
    width: 100%;
    height: 100%;
  }
  .element.clicked img {
    display: block;
  }
  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .element.clicked .flip-card-inner {
    transform: rotateX(180deg);
  }

  /* Position the front and back side */
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  /* Style the back side */
  .flip-card-back {
    background-color: white;
    color: white;
    transform: rotateX(180deg);
  }
</style>
