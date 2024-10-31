import React, { useState } from 'react';
import '../index.css';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    const mockMovies = [
      { title: 'Inception', image: 'https://via.placeholder.com/150' },
      { title: 'Interstellar', image: 'https://via.placeholder.com/150' },
      { title: 'The Matrix', image: 'https://via.placeholder.com/150' },
    ];
    const filteredMovies = mockMovies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <div className="movie-search">
      <h1>Busca de Filmes</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Digite o nome do filme..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div className="movie-item" key={index}>
              <img src={movie.image} alt={movie.title} />
              <h2>{movie.title}</h2>
            </div>
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;