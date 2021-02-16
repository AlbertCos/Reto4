import React, {useEffect} from "react"
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cb22661a56a50da9fff9da1507d7089&page=1"
const IMG_API = "https://image.tmbd.org/t/p/w1280";
const SEARCH_API ="https://api.themoviedb.org/3/search/movie?&api_key=1cb22661a56a50da9fff9da1507d7089&query="

function App() {

  const [movies, setMovies] = useState([]);
  
  useEffect(async()=>{
   const moviesResp= await fetch(FEATURED_API);
   const moviesR = await moviesResp.json();

  setMovies(moviesR);
  },[])

  return  <div> 
            {movies.map(movie =>(<Movie />))}
          </div>
}

export default App;

// Clave de la API (v3 auth)
// 1cb22661a56a50da9fff9da1507d7089
// Ejemplo de solicitud de API
// https://api.themoviedb.org/3/movie/550?api_key=1cb22661a56a50da9fff9da1507d7089
// Token de acceso de lectura a la API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2IyMjY2MWE1NmE1MGRhOWZmZjlkYTE1MDdkNzA4OSIsInN1YiI6IjYwMmJiMDlkNjNkOTM3MDAzZGNlMjI2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuhVwm_pdR-pTydksS6-RAON47fev522K0-v90fzW0w
