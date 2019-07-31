<template>
  <div>
    <Level v-if="getLevel === 0" />
    <Game v-if="getLevel > 0"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Game from '@/components/Game.vue';
import Level from '@/components/Level.vue';

export default {
  name: 'GamePage',
  components: {
    Game,
    Level
  },
  computed: mapGetters(['getLevel']),
};
</script>

<style>

</style>
