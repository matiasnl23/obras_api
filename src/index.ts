import express from 'express';

import obrasRouter from './routes/obras';
import { express_config } from '../environment';
import bodyParser = require('body-parser');

const app = express();

let port = express_config.port || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/obra', obrasRouter);

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));
