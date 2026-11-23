import express from 'express';
import colors from 'colors';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const puerto = process.env.PORT || 3000;

//console.clear();

// uso de json
app.use(express.json())

// setear el motor de vistas
app.set('view engine', 'views')

// setear las vistas
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.set('views', path.join(__dirname, 'views'))

// levanto las rutas
import {ruteo} from './rutas/rutainicio.js'
import { url } from 'inspector';

app.use(ruteo)




app.listen(puerto, ()=>{
    console.log(`servidor iniciando en el puerto ${puerto}`);
})
