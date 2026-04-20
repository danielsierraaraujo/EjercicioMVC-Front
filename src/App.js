import React from 'react';
import './App.css'; // Importamos los estilos
import Reporte from './Reporte';
import RegistroAlumno from './RegistroAlumno';

function App() {
  return (
    <div className="app-container">
      <h1 className="header-title">Sistema de Gestión Académica</h1>
      
      <div className="grid-container">
        {/* Lado izquierdo: El formulario de registro */}
        <RegistroAlumno />

        {/* Lado derecho: La calculadora de notas */}
        <Reporte />
      </div>
    </div>
  );
}

export default App;