import * as express from 'express';


const app = express();

const t: string = 'a'

app.get('/', (req, res) => {

    if(t){
        throw new Error('helo');
    }

    res.send('Hello Wo  r ld!2')}

)

app.listen(3000, () => console.log('Example app listening on port 3000!'))