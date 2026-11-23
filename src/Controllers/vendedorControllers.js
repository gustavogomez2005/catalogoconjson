import {ventas} from '../catalogo.js';

export class Vendedor{

    static mostrarVend(pet, resp){
        resp.send(ventas.vendedor)
    };
    
}