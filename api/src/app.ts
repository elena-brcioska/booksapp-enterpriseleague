import express from 'express';
import booksRoute from './routes/books';
import cors from 'cors'

const app = express();

app.use(cors({
    exposedHeaders: ['x-total-count'],
  }));


app.use('/api', booksRoute);

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});