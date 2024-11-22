export const buscarUltimoSms = (id, mensajes) => {
    let mayor = 0;
    let ultimoMensajeEnviado = "No encontrado";
    const smsPorRemitente = mensajes.filter(
        (sms) => sms.remitenteId === Number(id)
    );
    smsPorRemitente.forEach((element) => {
        if (Number(element.timestamp.split("T")[1].replace(/:/g, "")) > mayor) {
            mayor = Number(element.timestamp.split("T")[1].replace(/:/g, ""));
            ultimoMensajeEnviado = element.contenido;
        }
    });
    return ultimoMensajeEnviado;
};
