import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, filterTitle, filterRating }) {
  // Filtrer les films en fonction du titre et de la rating
  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const ratingMatch = filterRating === '' || movie.rating.toString() === filterRating;
    return titleMatch && ratingMatch;
  });

  return (
    <div>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;