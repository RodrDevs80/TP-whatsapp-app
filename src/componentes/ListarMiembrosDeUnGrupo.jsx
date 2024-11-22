/* eslint-disable react/prop-types */
import { useState } from "react";
import { listarUserEnGrupos } from "../funciones/listarUserEnGrupos";

export const ListarMiembrosDeUnGrupo = ({ grupos, contactos }) => {
  const [listGrup, setListgrup] = useState([]);
  const handleListarGrupos = (e) => {
    setListgrup(listarUserEnGrupos(grupos, contactos, e.target.textContent));
  };

  return (
    <>
      <div className="contenedor-ultimo-sms">
        <span className="p-5">
          <small>Actividad 7: Listar todos los miembros de un grupo.</small>
        </span>
        <div>
          <small>Elige que grupo ver 👁</small>
          {grupos.map((item) => (
            <button
              className="bg-blue-500 p-3 m-2 text-white rounded-full shadow-lg hover:bg-blue-700"
              onClick={handleListarGrupos}
              key={item.id}
            >
              {item.nombre}
            </button>
          ))}
        </div>
        <div className="resultado">
          {listGrup.length !== 0
            ? listGrup.map((item, i) => (
                <ol key={item.id}>
                  <li>
                    {i + 1}◾📱◾Nombre: {item.nombre}
                  </li>
                </ol>
              ))
            : null}
        </div>
      </div>
    </>
  );
};
