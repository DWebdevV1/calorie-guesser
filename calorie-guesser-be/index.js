import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import foodsRoute from './routes/foods.js';

const app = express();
const port = 3000;

app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:5173'] }));
app.use(morgan('combined'));

app.get('/', (req, res) => {
   res.send('Hello World');
});

app.use('/foods', foodsRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));