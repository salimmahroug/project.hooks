import React from 'react';
import { useParams } from 'react-router-dom';
import movies from './movies';
import './MovieDescription.css'; // Importez la feuille de style ici

const MovieDescription = () => {
  const { movieId } = useParams();

  // Utilisez movieId pour récupérer les détails du film depuis la liste de films
  const selectedMovie = movies.find((movie) => decodeURIComponent(movieId) === movie.title);

  // Vérifiez si le film est trouvé
  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  const { title, description, posterURL } = selectedMovie;

  return (
    <div className="movie-description">
      <div className="description">
        <h1>{title}</h1>
        <p>{description}</p>
        {/* Ajoutez d'autres informations sur le film ici */}
      </div>
      <div className="image-container">
        <img src={posterURL} alt={title} className="movie-poster" />
      </div>
    </div>
  );
};

export default MovieDescription;
