import {ventas} from '../catalogo.js';

export class Producto{

static mostrarProducto(pet, resp){
    resp.send(ventas.productos)
}

// buscar por codigo de producto
static buscarProductoPorId(pet, resp){
    let id = pet.params.id;
    let existe = ventas.productos.find(prod => prod.idProd == id)
    if (existe == undefined) {
        resp.send(`Producto inexistente !!`)
    } else {
        resp.send(`Producto: ${existe.nombre} Código: ${existe.idProd} Descripción: ${existe.descrip} Fecha de ingreso: ${existe.fechaalta} Precio: ${existe.precio} Códgo de Categoria: ${existe.catid} `)    
    }
}

// mostrar los productos de la categoria x
static mostrarProdPorCate(pet, resp){
    let id = pet.params.id;
    let prodcat = ventas.productos.filter(prod => prod.catid == id)
    if (prodcat.length >= 0) {
        resp.send(prodcat)    
    } else {
        
        resp.send(`No existen productos para el código de categoria ${id}`)
    }
}

// mostrar los productos que ingresaron a partir de la fecha x
static mostrarProdPorFecha(pet, resp){
    let fecha = pet.params.desde;
    let prodfecha = ventas.productos.filter(prod => prod.fechaalta == fecha)
    if (prodfecha.length >= 0) {
        resp.send(prodfecha)
    } else {
        resp.send(`No existen productos para la fecha ${fecha}`)
    }    
}

// mostrar los productos que ingresaron dentro de estas fechas
static mostrarProdEntreFechas (pet, resp){
    let fechadesde = pet.params.desde;
    let fechahasta = pet.params.hasta;
    let prodfecha = ventas.productos.filter(prod => prod.fechaalta >= fechadesde && prod.fechaalta <= fechahasta)
    if (prodfecha.length >= 0) {
            resp.send(prodfecha)    
    } else {
        resp.send(`No existen productos dentro de ese rango de  fecha ${fechadesde} al ${fechahasta}`)
    }    
}

// mostrar los productos de tal nombre
static mostrarProdPorNombre (pet, resp){
    let nom = pet.params.nom;
    let art = ventas.productos.filter(prod => prod.nombre.includes(nom))
    if (art.length >= 0) {
            resp.send(art)
    } else {
        resp.send(`No existen productos que comienzen con ${nom}`)
    }
}


}