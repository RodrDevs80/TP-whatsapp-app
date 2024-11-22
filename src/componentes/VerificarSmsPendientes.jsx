/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { verificarMensajesSinLeer } from "../funciones/verificarMensajesSinLeer";

export const VerificarSmsPendientes = ({ contactos, mensajes }) => {
  const [nomb, setNomb] = useState("");
  const [smsNoLeidos, setSmsNoLeidos] = useState([]);
  useEffect(() => {
    const respuesta = verificarMensajesSinLeer(nomb, mensajes, contactos);
    setSmsNoLeidos(respuesta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nomb]);

  return (
    <>
      <div className="contenedor-ultimo-sms">
        <span className="p-5">
          <small>
            Actividad 6: Verificar si hay mensajes pendientes de leer de un
            contacto específico.
          </small>
        </span>
        <div>
          <label htmlFor="nombreSmsNoL">Ingrese el nombre del contacto</label>
          <input
            type="text"
            id="nombreSmsNoL"
            value={nomb}
            onChange={(e) => setNomb(e.target.value)}
          />
        </div>
        <div className="resultado">
          {nomb === "" ? (
            <h5>
              Busca 🔍 los mensajes no Leidos de un Contacto por su nombre
            </h5>
          ) : smsNoLeidos.length !== 0 ? (
            smsNoLeidos.map((sms) => (
              <div key={sms.id}>
                <h5>Id Destinatario: {sms.destinatarioId} 😀</h5>
                <p>Contenido: {sms.contenido} 📝</p>
                <p>
                  {sms.leido
                    ? "Este mensaje fue leído ✅"
                    : "Este mensaje No fue leído ❌"}
                </p>
              </div>
            ))
          ) : (
            <h5>
              No hay mensajes sin leer para ese contacto o no existe en su
              listado!🚨
            </h5>
          )}
        </div>
      </div>
    </>
  );
};
