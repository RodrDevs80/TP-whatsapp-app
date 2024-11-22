

export const buscarUserPorId = (id, contactos) => {
    const user = contactos.find(contacto => contacto.id === id);
    if (user) return user;
    return false;
}
