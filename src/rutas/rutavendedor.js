import express from 'express';
const rvend = express.Router();
//import {ventas} from '../catalogo.js';
import {Vendedor} from '../Controllers/vendedorControllers.js';

rvend.get('/catalogo/vende', Vendedor.mostrarVend);


export {rvend}