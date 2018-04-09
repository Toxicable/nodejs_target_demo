import * as express from 'express';
import { name } from '@lib';

const app = express();

const t: string = 'a'

app.get('/', async (req, res) => {
    console.log(name);
    console.log('its a REAL log ');
    if(t){
        // throw new Error('check your debugger for the stack trace');
    }
    await Promise.resolve();


    res.send('Hello World!')}

)

app.listen(3000, () => console.log('Example app listening on port 3000!'))