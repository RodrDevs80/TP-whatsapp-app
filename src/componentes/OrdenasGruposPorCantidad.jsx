/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  ordenarGruposDeMayorAMenor,
  ordenarGruposDeMenorAMayor,
} from "../funciones/ordenarGrupos";

export const OrdenasGruposPorCantidad = ({ grupos }) => {
  const [gruposOrdenados, setGruposOrdenados] = useState([]);
  const [valor, setValor] = useState();
  const handleListarGruposMa = () => {
    setGruposOrdenados([...ordenarGruposDeMayorAMenor(grupos)]);
    setValor(true);
  };
  const handleListarGruposMe = () => {
    setGruposOrdenados([...ordenarGruposDeMenorAMayor(grupos)]);
    setValor(false);
  };
  return (
    <>
      <div className="contenedor-ultimo-sms">
        <span className="p-5">
          <small>
            Actividad 10: Ordenar los grupos por el número de miembros.
          </small>
        </span>
        <div>
          <small>
            Elige grupo para visualizar la cantidad de su integrantes
          </small>

          <button
            className="bg-blue-500 p-3 m-2 text-white rounded-full shadow-lg hover:bg-blue-700"
            onClick={handleListarGruposMa}
          >
            Ordenar de mayor cantidad a menor
          </button>
          <br />
          <button
            className="bg-blue-500 p-3 m-2 text-white rounded-full shadow-lg hover:bg-blue-700"
            onClick={handleListarGruposMe}
          >
            Ordenar de menor cantidad a mayor
          </button>
        </div>

        <div className="resultado">
          {gruposOrdenados.length === 0
            ? null
            : gruposOrdenados.map((item) => (
                <div
                  className={valor ? "bg-blue-400 p-0.5" : "bg-red-300 p-0.5"}
                  key={item.id}
                >
                  <h2>Grupo:{item.nombre}</h2>
                  <h3>Cantidad de Integrantes:{item.miembrosIds.length}</h3>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};
