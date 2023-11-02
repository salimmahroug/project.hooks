// AddMovieForm.js
import React, { useState } from 'react';
import './AddMovieForm.css';

function AddMovieForm({ addMovie }) {
  // Initialisation pour stocker les détails du nouveau movie
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });

  // Fonction pour gérer les changements dans les champs de input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // updating 
    setNewMovie({ ...newMovie, [name]: value });
  };
  // unmointing
  const handleSubmit = (e) => {
    e.preventDefault();
    // Appel de la fonction "addMovie"
    addMovie(newMovie);
    // Réinitialisation des champs du formulaire à des valeurs vides après que terminer
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  return (
    <form className='inputt' onSubmit={handleSubmit}>
      {/* Champ de sinput pour le titre du film */}
      <input className='der' type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleInputChange} required />
      {/* Champ de input  pour la description du film */}
      <input type="text" name="description" placeholder="Description" value={newMovie.description} onChange={handleInputChange} required />
      {/* Champ de input  pour l URL de l affiche du film */}
      <input type="text" name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleInputChange} required />
      {/* Champ de input  pour la rating du movie */}
      <input type="number" name="rating" placeholder="Rating" value={newMovie.rating} onChange={handleInputChange} required />
      {/* Bouton pour ajouter la movie aprer la remplisage de tout les champ */}
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
