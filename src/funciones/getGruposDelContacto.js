import { buscarUsuarioPorNombre } from "./buscarUserPorNombre";



export const getGruposDelContacto = (nombreUser, contactos, grupos) => {
    let gruposDelContacto = [];
    const user = buscarUsuarioPorNombre(nombreUser, contactos);
    grupos.filter((grupo) =>
        grupo.miembrosIds.some((id) =>
            id == user.id ? gruposDelContacto.push(grupo.nombre) : null
        )
    );
    return gruposDelContacto;
};