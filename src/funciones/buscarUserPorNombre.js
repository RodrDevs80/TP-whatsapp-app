export const buscarUsuarioPorNombre = (nombre, contactos) => {
    if (contactos.find(
        (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
    )) {
        return contactos.find(
            (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
        )
    } else {
        return "No se encuentra";
    }

};