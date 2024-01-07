import {computed, reactive, ref} from 'vue';
import { foods as data } from '../data/foods.json';
import { usePlayer } from './player.ts';
import { iFood } from '../types/Food.ts';

const {
    questionsRight,
    questionCounter,
    increaseScore,
    hasStarted,
    isEnd
} = usePlayer()

const foods = ref<iFood[]>([]);
const options = reactive(new Set());

const randomFoodIndex = computed(() => Math.floor(Math.random() * foods.value.length))
const activeFood = computed(() => foods.value[randomFoodIndex.value])

export function useFoods() {

    const totalFoods = computed(() => (foods.value?.length || 0) + questionCounter.value);

    const checkResult = (value: number) => {
        if (!!(value && !isNaN(value) && value === activeFood.value['calories'])) {
            increaseScore()
            questionsRight.value++
        }
        removeActiveFood()
        questionCounter.value++
    };

    const removeActiveFood = () => {
        foods.value.splice(randomFoodIndex.value, 1)
        options.clear();

        if (foods.value?.length) {
            generateRandomOptions()
        } else {
         isEnd.value = true;
        }
    }

    const generateRandomOptions = () => {
        options.add(activeFood.value.calories)

        while (options.size < 3) {
            const option = Math.round(activeFood.value.calories * (Math.random() * 2 + 1))
            options.add(option)
        }
        return options
    }

    const initFoods = () => {
        foods.value = [...data];

        if (foods.value?.length) {
            hasStarted.value = true;
            generateRandomOptions()
        }
    }

    return {
        foods,
        options,
        activeFood,
        totalFoods,
        initFoods,
        checkResult,
        removeActiveFood
    }
}