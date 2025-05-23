import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot de react-dom/client
import CurriculumVitae from './CurriculumVitae'; // Importa tu componente principal del CV
// Importa tus estilos CSS globales si los tienes (ej. Tailwind CSS base)
// import './index.css'; 

const container = document.getElementById('root'); // Obtiene el elemento div con id="root" del HTML

if (container) {
  const root = createRoot(container); // Crea una raíz de React
  root.render(
    <React.StrictMode>
      <CurriculumVitae /> {/* Renderiza tu componente CurriculumVitae dentro de la raíz */}
    </React.StrictMode>
  );
} else {
  console.error('Element with ID "root" not found in the document.');
}

