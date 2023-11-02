import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import moviesData from './movies';

function App() {
  // État pour gérer le filtre par title
  const [filterTitle, setFilterTitle] = useState(''); 

  // État pour gérer le filtre par rating
  const [filterRating, setFilterRating] = useState('');
  const [movies, setMovies] = useState(moviesData);
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);

  // Fonction pour updating le filtre par titre
  const handleFilterTitle = (e) => {
    setFilterTitle(e.target.value);
  };

  // Fonction pour updating le filtre par rating 
  const handleFilterRating = (e) => {
    setFilterRating(e.target.value);
  };

  // Fonction pour afficher le formulaire d'ajout de film
  const handleAddMovieClick = () => {
    setShowAddMovieForm(true);
  };

  // Fonction pour ajouter un nouveau film 
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setShowAddMovieForm(false); 
  };

  return (
    <div className="App">
      <h1>_____________________Movies_____________________</h1>

      <div className='block'>
        <div className='filter'>
          <Filter
            filterTitle={filterTitle}
            filterRating={filterRating}
            handleFilterTitle={handleFilterTitle}
            handleFilterRating={handleFilterRating}
          />
        </div>

        <div className='moo'>
          <div>
            {showAddMovieForm ? (
              <AddMovieForm addMovie={addMovie} />
            ) : (
              // Affiche la liste de films avec les filtres 
              <MovieList movies={movies} filterTitle={filterTitle} filterRating={filterRating} />
            )}
            <button className='boutton' onClick={handleAddMovieClick}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
