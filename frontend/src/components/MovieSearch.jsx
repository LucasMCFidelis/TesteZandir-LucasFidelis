import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';
import { Button } from './button/button.jsx';
import { MovieCard } from './movieCard/movieCard.jsx';
import { RefreshCcw } from 'lucide-react'

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [yearQuery, setYearQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/filmes/');
        setMovies(response.data);
        setFilteredMovies(response.data);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = () => {
    if (query.trim().length === 0 && yearQuery.trim().length === 0) {
      setFilteredMovies(movies)
      return
    }

    const filteredMovies = movies.filter(movie => {
      const matchesTitle = movie.titulo.toLowerCase().includes(query.toLowerCase());
      const matchesYear = yearQuery.trim() !== '' && movie.ano.toString().includes(yearQuery);
      return matchesTitle && matchesYear;
    });
    
    setFilteredMovies(filteredMovies);
  };

  return (
    <div className="movie-search">
      <h1>Busca de Filmes</h1>
      <div className='movie-actions'>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Digite o nome do filme..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="number"
            placeholder="Ano"
            value={yearQuery}
            onChange={(e) => setYearQuery(e.target.value)}
          />
          <Button
            onClickFunction={handleSearch}
            text={'Buscar'}
          />
        </div>
        <Button
          icon={<RefreshCcw />}
          onClickFunction={() => {
            setQuery('');
            setYearQuery('');
            setFilteredMovies(movies);
          }}
        />
      </div>
      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              titulo={movie.titulo}
              diretor={movie.diretor}
              ano={movie.ano}
            ></MovieCard>
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;