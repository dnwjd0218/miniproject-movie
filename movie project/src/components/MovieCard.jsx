import {  useNavigate } from "react-router-dom";

const MovieCard = ({ title, poster, vote}) => {
    const baseUrl = "https://image.tmdb.org/t/p/w500"
    const nav = useNavigate();

    const handleClick=() => {
        nav('/details')
    }
    return (
        <div className="card-container" onClick={handleClick}>
            <img className="card-image" src={baseUrl + poster} alt={`${title} 포스터`} />
            <h2 className="card-title">{title}</h2>
            <span className="card-vote">평점 : {vote}</span>
        </div>
    );
};

export default MovieCard;