import express from 'express';
const rcatalogo = express.Router();

import {mostrar} from '../Controllers/catalogoControllers.js';

rcatalogo.get('/catalogo', mostrar)


export {rcatalogo}