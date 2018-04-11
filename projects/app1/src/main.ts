import * as express from 'express';
import { name } from '@lib';
const someText = require('./hello.txt');

const app = express();

console.log(someText)

app.get('/', async (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => console.log('Example app listening on port 3000!  '))