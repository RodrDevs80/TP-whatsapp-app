/* eslint-disable react/prop-types */
export const ListaDeContactos = ({ contactos }) => {
  return (
    <>
      <div className="contenedor-tarjetas">
        <h3 className="text-3xl font-bold underline">Mis Contactos</h3>
        <span>
          <small>
            Actividad 1:Mostrar nombres de contactos: Crea una lista que muestre
            solo los nombres de los contactos.
          </small>
        </span>
        {contactos &&
          contactos.map((contacto) => (
            <div className="tarjeta-contacto" key={contacto.id}>
              <img src={contacto.img} alt={contacto.nombre} />
              <div className="contenedor-info">
                <h5>Nombre: {contacto.nombre}</h5>
                <span>Tel: {contacto.numero}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
