import { buscarUserPorId } from "./buscarUserPorId";



export const listarUserEnGrupos = (grupos, contactos, nombreDelgrupo) => {
    let usuarios = [];
    grupos.forEach((element) => {
        element.miembrosIds.map((idUser) =>
            buscarUserPorId(idUser, contactos) &&
                element.nombre.toUpperCase() === nombreDelgrupo.toUpperCase()
                ? usuarios.push(buscarUserPorId(idUser, contactos))
                : null
        );
    });
    return usuarios;
}


