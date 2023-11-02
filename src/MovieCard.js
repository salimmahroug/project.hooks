import React from 'react'
import './moviecard.css'
//j import ce card depuis le site free frontend.com 
const MovieCard = ({movie}) => {
  return (
    <div className='box'>
      <div className="card">
  <img src={movie.posterURL} />
  <div className="descriptions">
    <h1 >{movie.title}</h1>
    <p>
      {movie.description}
    </p>
    <h2>
      <i className="fab fa-youtube" />
      rating:{movie.rating}
    </h2>
  </div>
</div>
    </div>
  )
}

export default MovieCard
