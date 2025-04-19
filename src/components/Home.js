import React, { useState } from 'react';
import MovieList from './MovieList.js';
import Filter from './Filter.js';
import AddMovie from './AddMovie.js';

function Home({ movies, setMovies }) {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchRate, setSearchRate] = useState(0);

  const handleAddMovie = (movie) => {
    setMovies([...movies, { ...movie, id: movies.length + 1 }]);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
    movie.rating >= searchRate
  );

  return (
    <div className="container">
      <h1>My Movie App</h1>
      <Filter setSearchTitle={setSearchTitle} setSearchRate={setSearchRate} />
      <MovieList movies={filteredMovies} />
      <AddMovie onAddMovie={handleAddMovie} />
    </div>
  );
}

export default Home;