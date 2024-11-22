export const ordenarContactos = (contactos) => {

    return contactos.sort((a, b) => a.nombre.localeCompare(b.nombre))

};