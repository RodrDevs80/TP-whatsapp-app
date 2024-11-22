import "./App.css";
import { BuscarContactoPorNombre } from "./componentes/BuscarContactoPorNombre";
import { BuscarUltimoSmsPorId } from "./componentes/BuscarUltimoSmsPorId";
import { FiltrarSMS } from "./componentes/FiltrarSMS";
import { GruposDeUnContacto } from "./componentes/GruposDeUnContacto";
import { ListaDeContactos } from "./componentes/ListaDeContactos";
import { ListarMiembrosDeUnGrupo } from "./componentes/ListarMiembrosDeUnGrupo";
import { NumeroTotalDeMensajes } from "./componentes/NumeroTotalDeMensajes";
import { OrdenarLosContactosPorNombre } from "./componentes/OrdenarLosContactosPorNombre";
import { OrdenasGruposPorCantidad } from "./componentes/OrdenasGruposPorCantidad";
import { VerificarSmsPendientes } from "./componentes/VerificarSmsPendientes";
import { contactos } from "./data/contactos";
import { grupos } from "./data/grupos";
import { mensajes } from "./data/mensajes";

function App() {
  return (
    <>
      <ListaDeContactos contactos={contactos} />
      <FiltrarSMS mensajes={mensajes} />
      <BuscarUltimoSmsPorId mensajes={mensajes} contactos={contactos} />
      <GruposDeUnContacto grupos={grupos} contactos={contactos} />
      <OrdenarLosContactosPorNombre contactos={contactos} />
      <VerificarSmsPendientes mensajes={mensajes} contactos={contactos} />
      <ListarMiembrosDeUnGrupo grupos={grupos} contactos={contactos} />
      <NumeroTotalDeMensajes contactos={contactos} mensajes={mensajes} />
      <BuscarContactoPorNombre contactos={contactos} />
      <OrdenasGruposPorCantidad grupos={grupos} />
    </>
  );
}

export default App;
