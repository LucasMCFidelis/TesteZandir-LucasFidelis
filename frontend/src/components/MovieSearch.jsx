import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/filmes/');
        setMovies(response.data);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = () => {
    const filteredMovies = movies.filter(movie =>
      movie.titulo.toLowerCase().includes(query.toLowerCase())
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
              <h2>{movie.titulo}</h2>
              <p>Diretor: {movie.diretor}</p>
              <p>Ano: {movie.ano}</p>
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