import {usePlayer} from './player.ts';
import {useFoods} from './foods.ts';

const { resetScore } = usePlayer()
const { initFoods } = useFoods()

export function useGame() {
    const restartGame = () => {
        resetScore()
        initFoods()
    }

    return { restartGame }
}