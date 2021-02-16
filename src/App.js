import React, {useState, useEffect} from "react"
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cb22661a56a50da9fff9da1507d7089&page=1"
const SEARCH_API ="https://api.themoviedb.org/3/search/movie?&api_key=1cb22661a56a50da9fff9da1507d7089&query=";

function App() {

  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{
   fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data)=>{
      console.log(data.results);
      setMovies(data.results);
    });
  },[]);

  return  <div className="movie-container"> 
            {movies.length>0 && movies.map((movie) =>
            <Movie key={movie.id} {...movie} />
            )}
          </div>;
}

export default App;

// Clave de la API (v3 auth)
// 1cb22661a56a50da9fff9da1507d7089
// Ejemplo de solicitud de API
// https://api.themoviedb.org/3/movie/550?api_key=1cb22661a56a50da9fff9da1507d7089
// Token de acceso de lectura a la API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2IyMjY2MWE1NmE1MGRhOWZmZjlkYTE1MDdkNzA4OSIsInN1YiI6IjYwMmJiMDlkNjNkOTM3MDAzZGNlMjI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuhVwm_pdR-pTydksS6-RAON47fev522K0-v90fzW0w
