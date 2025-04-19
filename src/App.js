// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import MovieDetails from './components/MovieDetails.js';
import React, { useState } from 'react';
import './App.css';

const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology...",
    posterURL: "https://m.media-amazon.com/images/I/51v5ZpFyaFL.jpg",
    rating: 5,
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    id: 2,
    title: "The Matrix",
    description: "A computer hacker learns about the true nature of reality...",
    posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    rating: 4,
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
  }
];

function App() {
  const [movies, setMovies] = useState(initialMovies);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home movies={movies} setMovies={setMovies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;