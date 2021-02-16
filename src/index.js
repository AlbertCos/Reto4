import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// Clave de la API (v3 auth)
// 1cb22661a56a50da9fff9da1507d7089
// Ejemplo de solicitud de API
// https://api.themoviedb.org/3/movie/550?api_key=1cb22661a56a50da9fff9da1507d7089
// Token de acceso de lectura a la API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2IyMjY2MWE1NmE1MGRhOWZmZjlkYTE1MDdkNzA4OSIsInN1YiI6IjYwMmJiMDlkNjNkOTM3MDAzZGNlMjI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuhVwm_pdR-pTydksS6-RAON47fev522K0-v90fzW0w

reportWebVitals();
