/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { buscarUsuarioPorNombre } from "../funciones/buscarUserPorNombre";

export const NumeroTotalDeMensajes = ({ contactos, mensajes }) => {
  const [valor, setValor] = useState("");
  const [totalmensajes, setTotalMensajes] = useState("");
  let totalDeSms = 0;

  useEffect(() => {
    mensajes.map((item) =>
      item.remitenteId === buscarUsuarioPorNombre(valor, contactos).id
        ? // eslint-disable-next-line react-hooks/exhaustive-deps
          (totalDeSms = totalDeSms + 1)
        : null
    );
    setTotalMensajes(totalDeSms);
  }, [valor]);

  return (
    <>
      <div className="contenedor-ultimo-sms">
        <span className="p-5">
          <small>
            Actividad 8: Calcular el número total de mensajes enviados por cada
            contacto.
          </small>
        </span>
        <div>
          <label htmlFor="n">Ingrese el nombre del contacto</label>
          <input
            type="text"
            id="n"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <div className="resultado">
          {valor != "" ? (
            <h3>
              El total de mensajes es de <span>{totalmensajes}</span> 📝
            </h3>
          ) : (
            <h3>Busca el Total de SMS 🔍</h3>
          )}
        </div>
      </div>
    </>
  );
};
