// components/AddMovie.js
import React, { useState } from 'react';

function AddMovie({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && posterURL && rating) {
      onAddMovie({ title, description, posterURL, rating });
      setTitle('');
      setDescription('');
      setPosterURL('');
      setRating(0);
    }
  };

  return (
    <div className="add-movie-form">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
