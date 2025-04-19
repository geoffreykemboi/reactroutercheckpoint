// components/MovieDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default MovieDetails;
