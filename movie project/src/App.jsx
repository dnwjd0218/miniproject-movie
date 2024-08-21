import MovieCard from './components/MovieCard'
import './App.scss'
import { useEffect, useState } from 'react'
import movieListData from './data/movieListData.json'

function App() {
  const [movieList, setMovieList] = useState([])

useEffect(()=> {
      setMovieList(movieListData.results)
  },[])

  return (
    <div className='app-container'>
      {movieList.map((movie) => (
            <MovieCard 
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            vote={movie.vote_average}/>
          )
      )}
    </div>
  )
}

export default App
