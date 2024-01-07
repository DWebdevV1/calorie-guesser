import {computed, ref} from 'vue';

const score = ref(0);

const questionCounter = ref(0)
const questionsRight = ref(0);

const hasStarted = ref(false);
const isEnd = ref(false);

export function usePlayer() {

    const userRank = computed(() => {
        if (score.value >= 2000) {
            return 'Bodybuilder'
        } else if (score.value >= 1500) {
            return 'Pro'
        } else if (score.value >= 1000) {
            return 'Experienced'
        } else if (score.value >= 500) {
            return 'Average'
        } else {
            return 'Beginner'
        }
    })

    const increaseScore = () => score.value += 25;

    const resetScore = () => {
        score.value = 0;
        questionCounter.value = 0;
        questionsRight.value = 0;
        hasStarted.value = false;
        isEnd.value = false;
    }

    return {
        score,
        userRank,
        questionCounter,
        questionsRight,
        hasStarted,
        isEnd,
        increaseScore,
        resetScore
    }
}