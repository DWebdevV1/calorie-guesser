<script setup lang="ts">
import ActiveFood from '../components/ActiveFood.vue';
import {useFoods} from '../composables/foods.ts';
import {usePlayer} from '../composables/player.ts';

const { totalFoods } = useFoods()
const { questionCounter } = usePlayer()
</script>

<template>
  <div class="food">
    <p>{{ questionCounter + 1 }} / {{ totalFoods }}</p>
    <h2 class="food__headline">How many Calories are...</h2>
    <ActiveFood></ActiveFood>
  </div>
</template>

<style scoped>
  .food__headline {
    text-align: center;
    padding-bottom: 1rem;
    color: whitesmoke;
    font-size: 2.33rem;
    font-weight: normal;
  }

  .food p {
    font-weight: bold;
    text-align: center;
    margin: 0;
  }
</style>