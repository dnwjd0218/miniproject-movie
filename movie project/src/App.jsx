import MovieCard from './components/MovieCard'
import './App.scss'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
const VITE_AUTHORIZATION=import.meta.env.VITE_AUTHORIZATION

function App() {
  const [movieList, setMovieList] = useState([])
  console.log(movieList)

useEffect(()=> {

    const fetchMovies = async() => {
      fetch('https://api.themoviedb.org/3/movie/popular?language=ko&page=1', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${VITE_AUTHORIZATION}`,
          accept: 'application/json',
        }
      })
      .then(response => response.json())  
      .then(response => {
        setMovieList(response.results); 
      })
      .catch(error => {
        console.error(err);
      });
    };
    
    fetchMovies();
          },[])


  return (
    <div className='app-container'>
      <NavBar/>
      {movieList.map((movie) => (
            <MovieCard 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            vote={movie.vote_average}/>
          )
      )}
    </div>
  )
}

export default App
