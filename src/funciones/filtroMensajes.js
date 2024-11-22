export const filtroMensajes = (datos, rId, dId) => {
    return datos.filter(
        (sms) =>
            (sms.remitenteId == rId && sms.destinatarioId == dId) ||
            (sms.remitenteId == dId && sms.destinatarioId == rId)
    );
};