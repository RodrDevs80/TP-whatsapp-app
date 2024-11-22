/* eslint-disable react/prop-types */
import { useState } from "react";
import { filtroMensajes } from "../funciones/filtroMensajes";
import { useEffect } from "react";

export const FiltrarSMS = ({ mensajes }) => {
  const [dId, setDid] = useState(0);
  const [rId, setRid] = useState(0);
  const [me, setM] = useState([]);

  useEffect(() => {
    setM(filtroMensajes(mensajes, rId, dId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rId, dId]);

  return (
    <>
      <div className="contenedor-sms">
        <h3 className="flex items-center justify-center m-3 font-bold text-xl">
          Ingrese los siguientes datos para ver los mensajes:
        </h3>
        <span className="p-5">
          <small>
            Actividad 2:Filtrar mensajes entre dos contactos: Filtra los
            mensajes entre dos contactos específicos (por ejemplo, entre Ana y
            Carlos). Mostrar uno debajo del otro (tipo WhatsApp)
          </small>
        </span>
        <div className="ci flex gap-5 m-6 p-5">
          <div className="flex flex-col flex  items-center justify-center gap-2 m-4 p-5">
            <label className="font-bold" htmlFor="remitente">
              Ingrese el remitente:
            </label>
            <input
              type="number"
              id="remitente"
              value={rId}
              onChange={(e) => setRid(e.target.value)}
            />
          </div>
          <div className="flex flex-col flex  items-center justify-center gap-2 m-4 p-5">
            <label className="font-bold" htmlFor="destinatario">
              Ingrese el destinatario:
            </label>
            <input
              type="number"
              id="destinatario"
              value={dId}
              onChange={(e) => setDid(e.target.value)}
            />
          </div>
        </div>
        <hr />
        <p className="flex items-center justify-center font-bold p-2 bg-green">
          Mensajes
        </p>
        <div className="resultado">
          {me &&
            me.map((sms) => (
              <div
                className={
                  sms.remitenteId == rId ? "sms remitente" : "sms destinatario"
                }
                key={sms.id}
              >
                {sms.contenido}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
