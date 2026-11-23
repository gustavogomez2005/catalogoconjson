import express from 'express';
const rcli = express.Router();
import {Cliente} from '../Controllers/clienteControllers.js';
//import {ventas} from '../catalogo.js';

rcli.get('/catalogo/cli', Cliente.mostrarcli)

export {rcli}