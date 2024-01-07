<script setup lang="ts">
import Foods from './components/Foods.vue';
import Result from './components/Result.vue';
import {usePlayer} from './composables/player.ts';
import {useFoods} from './composables/foods.ts';
import {onMounted} from 'vue';

const { initFoods } = useFoods()
const { hasStarted, isEnd } = usePlayer()

onMounted(() => initFoods())
</script>

<template>
  <header>
    <p>
      <span style="color: #76e100">Cal</span>
      <span style="color: #00c8e5; margin-right: 0.5rem">orie</span>
      <span style="color: #735bda">gue</span>
      <span style="color: #c03fae">sser</span>
    </p>
    <div class="version">
      <span>by D. Weber</span>
      <span>(Version 1.0)</span>
    </div>
  </header>
  <main>
      <Result v-if="hasStarted && isEnd"></Result>
      <Foods v-else></Foods>
  </main>
</template>

<style scoped>
  header {
    background: #2e2e2e;
    color: whitesmoke;
    font-size: 1.66rem;
    letter-spacing: .1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
  }

  header > p, .version {
    margin: 1rem;
  }

  header > p {
    font-weight: bold;
  }

  .version {
    font-size: .66rem;
    font-style: italic;
    display: flex;
    flex-direction: column;
    gap: .33rem;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--bg-color) no-repeat center center/cover;
    min-height: calc(100vh - 5rem);
    width: 100%;
  }
</style>
