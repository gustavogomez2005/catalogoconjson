import {ventas} from '../catalogo.js';

export class Pedidos{

    static mostrarPedidos(pet, resp){
        resp.send(ventas.pedidos)
    }
}


