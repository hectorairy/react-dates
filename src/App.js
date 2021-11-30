import { useEffect, useState } from "react";
import { Cita } from "./components/Cita";
import { Formulario } from "./components/Formulario";

const citasIniciales = JSON.parse(localStorage.getItem("citas")) || [];
function App() {
  const [citas, setCitas] = useState(citasIniciales);

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  // Función para eliminar citas
  const eliminarCita = (id) => {
    const citaEliminada = citas.filter((cita) => cita.id !== id);
    setCitas(citaEliminada);
  };

  // Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario crearCita={crearCita} />
        </div>
        <div className="one-half column">
          <h2>{titulo}</h2>
          {citas.map((cita) => (
            <Cita key={cita.id} eliminarCita={eliminarCita} cita={cita} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
