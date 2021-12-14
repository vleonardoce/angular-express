/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(cors());

app.get('/api/:number', (req, res) => {
  const n = Number(req.params.number);

  const list = [];

  for (let i = 1; i <= n; i++) {
    let item = '';

    if (i % 3 === 0) {
      item += 'Fizz';
    }
    if (i % 5 === 0) {
      item += 'Buzz';
    }
    if (i % 7 === 0) {
      item += 'Jazz';
    }
    if (item === '') {
      item = i.toString();
    }
    list.push(item);
  }

  res.json(list);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
