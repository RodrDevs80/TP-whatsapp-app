/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ordenarContactos } from "../funciones/ordenarContactos";

export const OrdenarLosContactosPorNombre = ({ contactos }) => {
  const [listaOrdenada, setListaOrdenada] = useState([]);

  useEffect(() => {
    setListaOrdenada(ordenarContactos(contactos));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="contenedor-ultimo-sms">
        <span className="p-5">
          <small>Actividad 5: Ordenar contactos por nombre.</small>
        </span>
        <div className="resultado">
          {listaOrdenada.length !== 0
            ? listaOrdenada.map((item) => (
                <ol className="list-order" key={item.id}>
                  <li>
                    👤-Nombre: {item.nombre}-📞<span>{item.numero}</span>
                  </li>
                </ol>
              ))
            : null}
        </div>
      </div>
    </>
  );
};
