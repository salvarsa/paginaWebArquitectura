import express from 'express';
import ejs from 'ejs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url';

//Routes 
import indexRoutes from './routes/index.js'

//iniciar express
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))


//motor de plantillas
app.set('views', join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(indexRoutes);

app.use(express.static(join(__dirname, 'public')));






//servidor
const port = 3000;

app.listen(port, ()=>{
    console.log('🛰 servidor en el puerto 3000');
});