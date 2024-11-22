/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getGruposDelContacto } from "../funciones/getGruposDelContacto";

export const GruposDeUnContacto = ({ grupos, contactos }) => {
  const [nombreUser, setNombreUser] = useState("");
  const [gruposDelContactoHook, setGruposdelContacto] = useState([]);

  useEffect(() => {
    setGruposdelContacto(getGruposDelContacto(nombreUser, contactos, grupos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nombreUser]);

  return (
    <>
      <div className="contenedor-ultimo-sms">
        <span className="p-5">
          <small>
            Actividad 4: Mostrar grupos en los que participa un contacto.
          </small>
        </span>
        <div>
          <label htmlFor="nombreU">Ingrese el nombre del contacto</label>
          <input
            type="text"
            id="nombreU"
            value={nombreUser}
            onChange={(e) => setNombreUser(e.target.value)}
          />
        </div>
        <div className="resultado">
          {gruposDelContactoHook.length != 0
            ? gruposDelContactoHook.map((g, i) => (
                <ol key={i}>
                  <li>{g}</li>
                </ol>
              ))
            : "El contacto buscado no esta en ninguna lista 📢"}
        </div>
      </div>
    </>
  );
};
