import express from 'express';
import example from './routes/example';

const app = express();

app.get('/', (req, res) => res.send('Hello World!\nAnd another change.\n'));
app.use('/example', example);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
