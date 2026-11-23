import express from 'express';
const ruteo = express.Router();

import {rcatalogo} from '../rutas/rutacatalogo.js'
import {rcat} from '../rutas/rutacategoria.js';
import {rcli} from '../rutas/rutacliente.js';
import {rped} from '../rutas/rutapedidos.js';
import {rprod} from '../rutas/rutaproducto.js';
import {rvend} from '../rutas/rutavendedor.js';

ruteo.use(rcatalogo)
ruteo.use(rcat)
ruteo.use(rcli)
ruteo.use(rped)
ruteo.use(rprod)
ruteo.use(rvend)


ruteo.get('/', (pet, resp)=>{
    resp.send('bienvenido')
});

export {ruteo}