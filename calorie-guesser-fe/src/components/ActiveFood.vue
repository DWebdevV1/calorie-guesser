<script setup lang="ts">
import {useFoods} from '../composables/foods.ts';

const { activeFood, options, checkResult } = useFoods()
</script>

<template>
  <div class="food-active">
    <h1>{{ activeFood?.name }}</h1>
    <img :src="activeFood?.image" :alt="activeFood?.name">
    <div class="food-active__options">
      <button type="button" v-for="(option, index) of options" :key="index" @click="checkResult(option as number)">
        <span>{{ option }}</span>
        <span>/kcal</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.food-active {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid rgba(245, 245, 245, 0.33);
  padding: 3rem;
  user-select: none;
}

.food-active > h1 {
  letter-spacing: .05rem;
  font-size: 2rem;
  margin-top: 0;
}

.food-active__options {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 2rem 0;
}

.food-active__options button {
  padding: 2rem;
  background: transparent;
  border: 2px solid whitesmoke;
  outline: none;
  font-size: 2.33rem;
  color: whitesmoke;
  width: 10rem;
  letter-spacing: .33rem;
  user-select: none;
}

.food-active__options button:hover {
  cursor: pointer;
  background: rgba(245, 245, 245, 0.66);
  color: black;
  font-weight: bold;
}

.food-active__options span:nth-child(2) {
  display: block;
  font-size: 1rem;
  margin-top: .33rem;
}
</style>