import {ventas} from '../catalogo.js';


export function mostrarcate(pet, resp){
    resp.send(ventas.categorias)
}

// buscar por codigo de categoria
export function buscarcatexid(pet,resp){
    let id = pet.params.id;
    let resultado = ventas.categorias.find(cat => cat.idcat == id);
    if (resultado == undefined) {
        resp.send(`Categoria inexistente`)
    } else {
        resp.send(`ID: ${resultado.idcat} Categoria: ${resultado.nom}`)
    }
};



