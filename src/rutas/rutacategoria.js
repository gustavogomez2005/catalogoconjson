import express from 'express';
const rcat = express.Router();
import {buscarcatexid, mostrarcate} from '../Controllers/categoriaControllers.js';

//import {ventas} from '../catalogo.js';

rcat.get('/catalogo/cate', mostrarcate)

// buscar por codigo de categoria
rcat.get('/catalogo/cate/:id', buscarcatexid)


export {rcat}