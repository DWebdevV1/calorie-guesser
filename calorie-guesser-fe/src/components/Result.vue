<script setup lang="ts">
import {usePlayer} from '../composables/player.ts';
import {useGame} from '../composables/game.ts';
import {useFoods} from '../composables/foods.ts';

const { restartGame } = useGame()
const { score, userRank, questionsRight, questionCounter } = usePlayer()
const { totalFoods } = useFoods()
</script>

<template>
  <div class="result">
    <h1>Your result</h1>
    <div class="result__list">
      <div class="result__list-item">
        <p>Questions total:</p>
        <p>{{ totalFoods }}</p>
      </div>
      <div class="result__list-item">
        <p>Questions done:</p>
        <p>{{ questionCounter }}</p>
      </div>
      <div class="result__list-item">
        <p>Questions right:</p>
        <p>{{ questionsRight }}</p>
      </div>
      <div class="result__list-item">
        <p>Total Score:</p>
        <p>{{ score }}</p>
      </div>
      <div class="result__list-item">
        <p>Your rank:</p>
        <p>{{ userRank }}</p>
      </div>
    </div>
    <button type="button" @click="restartGame">Restart</button>
  </div>
</template>

<style scoped>
  .result {
    color: whitesmoke;
    padding: 3rem;
    border: 1px solid rgba(245, 245, 245, 0.33);
    min-width: 15rem;
  }

  .result__list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    margin-top: 2.33rem;
    padding: 1rem;
    background: transparent;
    border: 2px solid whitesmoke;
    outline: none;
    font-size: 1rem;
    color: whitesmoke;
    width: 100%;
    letter-spacing: .33rem;
    user-select: none;
  }

  button:hover {
    cursor: pointer;
    background: rgba(245, 245, 245, 0.66);
    color: black;
    font-weight: bold;
  }
</style>