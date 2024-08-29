import { useEffect, useState } from "react";
import '../components/MovieDetail.scss';
import { useParams } from "react-router-dom";

const VITE_AUTHORIZATION=import.meta.env.VITE_AUTHORIZATION
const baseUrl = "https://image.tmdb.org/t/p/w500"

function MovieDetail(){
    const [movieDetail, setMovieDetail] = useState([])
    const {id} = useParams()
    //Moviecard에서 클릭했을때 MovieDetail에 어떻게 맞는 id값이 들어오게 되는가?
useEffect(() => {
    const fetchMovieDetail = async() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko`, {
            method: 'GET',
            headers: {
            Authorization: `Bearer ${VITE_AUTHORIZATION}`,
            accept: 'application/json',
    }
        })
        .then(response => response.json())  
        .then(response => {
            setMovieDetail(response); 
        })
        .catch(error => {
            console.error(error);
        });
    };
    
    fetchMovieDetail();
},[id])
console.log(id)


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


