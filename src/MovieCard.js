import React from 'react';
import './moviecard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className='box'>
      <div className="card">
        <img src={movie.posterURL} alt={movie.title} />
        <div className="descriptions">
          <h1>{movie.title}</h1>
          <h2>
            <i className="fab fa-youtube" />
            Rating: {movie.rating}
          </h2>
          {/* Utilisation de Link pour créer un lien vers la page de description */}
          <Link to={`/description/${encodeURIComponent(movie.title)}`}>
            <button>See Description</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

