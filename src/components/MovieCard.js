// components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-card-content">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <Link to={`/movie/${movie.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
