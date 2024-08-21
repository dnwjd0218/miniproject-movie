import movieDetailData from '../data/movieDetailData.json'
import { useEffect, useState } from "react";
import '../pages/MovieDetail.scss';

function MovieDetail(){
    const [movieDetail, setMovieDetail] = useState([])
    const baseUrl = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
            setMovieDetail(movieDetailData)
        },[])

    return(
        <div className="detail-container">
            <div className="detail-poster">
            <img src={baseUrl + movieDetail.poster_path} alt={movieDetail.title}/>
            </div>
            <div className="detail-info">
                <h1>{movieDetail.title}</h1>
                <div> 평점 : {movieDetail.vote_average}</div>
                <div> 장르 : {movieDetail.genres && movieDetail.genres.map(genre => genre.name).join(', ')}</div>
                <p>줄거리 : <br/>{movieDetail.overview}</p>
            </div>
            
        </div>
    )
}

export default MovieDetail