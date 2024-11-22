import { buscarUsuarioPorNombre } from "./buscarUserPorNombre"


export const verificarMensajesSinLeer = (nomb, mensajes, contactos) => {
    return mensajes.filter(
        (sms) =>
            sms.destinatarioId === buscarUsuarioPorNombre(nomb, contactos).id &&
            !sms.leido
    )
}
