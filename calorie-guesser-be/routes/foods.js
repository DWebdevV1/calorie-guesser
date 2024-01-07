import data from '../data/data.json' assert { type: 'json' };
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    data
        ? res.status(200)
            .json(data)
        : res.status(500)
            .json({ message: 'Error while processing the json request' });
});

router.get('/:id', (req, res) => {
    const foodId = req.params.id;
    const singleFood = data.foods.find(f => f.id === foodId);

    singleFood
        ? res.status(200).json(singleFood)
        : res.status(404).json({ message: '404 - Food not found' });
});

export default router;