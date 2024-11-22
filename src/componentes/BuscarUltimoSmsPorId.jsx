/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { buscarUltimoSms } from "../funciones/buscarUltimoSms";
import { buscarUsuarioPorNombre } from "../funciones/buscarUserPorNombre";

export const BuscarUltimoSmsPorId = ({ mensajes, contactos }) => {
  const [ultSms, setUltSms] = useState("");
  const [nombre, setNombre] = useState("");
  const [sinBusqueda, setSinBusqueda] = useState(true);
  const handleBusqueda = (nombre) => {
    const ultimoSMS = buscarUltimoSms(
      buscarUsuarioPorNombre(nombre, contactos).id,
      mensajes
    );
    setUltSms(ultimoSMS);
    setSinBusqueda(nombre == "" ? true : false);
  };
  useEffect(() => {
    handleBusqueda(nombre);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nombre]);
  return (
    <>
      <div className="contenedor-ultimo-sms">
        <span className="p-5">
          <small>
            Actividad 3: Buscar el último mensaje enviado por un contacto
            específico.
          </small>
        </span>
        <div>
          <label htmlFor="nombre">Ingrese el nombre del contacto</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="resultado">
          {sinBusqueda ? (
            "No se realizo ninguna búsqueda!🔍"
          ) : ultSms == "No encontrado" ? (
            "no hay mensaje del contacto buscado 📢"
          ) : (
            <div>
              <h5>Ultimo Mensaje:</h5>
              <p>{ultSms}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
