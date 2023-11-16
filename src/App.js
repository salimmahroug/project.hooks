import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import moviesData from './movies';
import MovieDescription from './MovieDescription';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');
  const [movies, setMovies] = useState(moviesData);
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);

  const handleFilterTitle = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleFilterRating = (e) => {
    setFilterRating(e.target.value);
  };

  const handleAddMovieClick = () => {
    setShowAddMovieForm(true);
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setShowAddMovieForm(false);
  };

  return (
    <div className="App">
      <h1>Movies</h1>

      <div className="block">
        <div className="filter">
          <Filter
            filterTitle={filterTitle}
            filterRating={filterRating}
            handleFilterTitle={handleFilterTitle}
            handleFilterRating={handleFilterRating}
          />
        </div>

        <div className="moo">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {showAddMovieForm ? (
                    <AddMovieForm addMovie={addMovie} />
                  ) : (
                    <MovieList movies={movies} filterTitle={filterTitle} filterRating={filterRating} />
                  )}
                  <button className="boutton" onClick={handleAddMovieClick}>
                    +
                  </button>
                </div>
              }
            />
            <Route path="/description/:movieId" element={<MovieDescription />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
