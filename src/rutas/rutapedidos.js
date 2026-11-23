import express from 'express';
const rped = express.Router();
//import {ventas} from '../catalogo.js';
import {Pedidos} from '../Controllers/pedidosControllers.js';

rped.get('/catalogo/pedidos', Pedidos.mostrarPedidos)

export {rped}