import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Server');
});

app.get('/user', (req, res) => {
  res.send('Hello User');
});

export default app;
