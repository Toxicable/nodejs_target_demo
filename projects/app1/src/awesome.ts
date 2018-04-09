import * as express from 'express';
import { name } from '@lib';

const app = express();

const t: string = 'a'

app.get('/', (req, res) => {
    console.log(name);
    console.log('its a REAL log');
    if(t){
        throw new Error('helo');
    }

    res.send('Hello Wo  r ld!2')}

)

app.listen(3000, () => console.log('Example app listening on port 3000!'))