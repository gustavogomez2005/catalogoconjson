import {ventas} from '../catalogo.js';

export class Cliente {
 static mostrarcli (pet, resp){
    resp.send(ventas.cliente)
}

}
