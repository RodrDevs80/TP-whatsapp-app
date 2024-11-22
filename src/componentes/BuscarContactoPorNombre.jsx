/* eslint-disable react/prop-types */
import { useState } from "react";
import { buscarUsuarioPorNombre } from "../funciones/buscarUserPorNombre";

export const BuscarContactoPorNombre = ({ contactos }) => {
  const [nombreV, setNombreV] = useState("");
  const [userContacto, setUserContacto] = useState(null);
  const handleBusquedaContacto = () => {
    const u = buscarUsuarioPorNombre(nombreV, contactos);
    setUserContacto(u);
    console.log(userContacto);
  };
  const handleLimpiar = () => {
    setUserContacto(null);
  };
  return (
    <>
      <div className="contenedor-ultimo-sms">
        <span className="p-5">
          <small>
            Actividad 9: Buscar contactos indicando un string (buscar por
            nombre).
          </small>
        </span>
        <div>
          <label htmlFor="nombrV">Ingrese el nombre del contacto</label>
          <input
            type="text"
            id="nombrV"
            value={nombreV}
            onChange={(e) => setNombreV(e.target.value)}
          />
          <br />
          <input
            className="hover:cursor-pointer"
            onClick={handleBusquedaContacto}
            type="button"
            value="Buscar"
          />
          <br />
          <input
            className="hover:cursor-pointer"
            onClick={handleLimpiar}
            type="button"
            value="limpiar"
          />
        </div>
        <div className="resultado">
          {userContacto && (
            <div>
              <h3>ID_Contacto:{userContacto.id}</h3>
              <h4>Nombre:{userContacto.nombre}</h4>
              <h5>Celular: {userContacto.numero}</h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
