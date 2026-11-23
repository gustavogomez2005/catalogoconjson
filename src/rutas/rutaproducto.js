import express from 'express';
const rprod = express.Router();
import {Producto} from '../Controllers/productosControllers.js';

//import {ventas} from '../catalogo.js';

rprod.get('/catalogo/prod', Producto.mostrarProducto)

// buscar por codigo de producto
rprod.get('/catalogo/prod/:id', Producto.buscarProductoPorId)

// mostrar los productos de la categoria x
rprod.get('/catalogo/prod/cat/:id', Producto.mostrarProdPorCate)

// mostrar los productos que ingresaron a partir de la fecha x
rprod.get('/catalogo/prod/fechaing/:desde', Producto.mostrarProdPorFecha)

// mostrar los productos que ingresaron dentro de estas fechas
rprod.get('/catalogo/prod/fechaing/:desde/:hasta', Producto.mostrarProdEntreFechas)

// mostrar los productos de tal nombre
rprod.get('/catalogo/prod/nombreprod/:nom', Producto.mostrarProdPorNombre)



export {rprod}