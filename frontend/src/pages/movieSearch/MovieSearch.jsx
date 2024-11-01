import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './movieSearch.css';
import { Button } from '../../components/button/button.jsx';
import { Input } from '../../components/input/input.jsx';
import { MovieCard } from '../../components/movieCard/movieCard.jsx';
import { RefreshCcw } from 'lucide-react'

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [yearQuery, setYearQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;

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
      const matchesYear = movie.ano.toString().includes(yearQuery);
      return matchesTitle && matchesYear;
    });

    setFilteredMovies(filteredMovies);
    setCurrentPage(1);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Calcular o número total de páginas
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  return (
    <div className="movie-search">
      <h1>Busca de Filmes</h1>

      <div className='search-bar'>
        <div className="search-inputs">
          <Input
            id='title'
            type="text"
            placeholder="Digite o nome do filme..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Input
            id='year'
            type="number"
            placeholder="Ano"
            value={yearQuery}
            onChange={(e) => setYearQuery(e.target.value)}
          />
        </div>

        <div className='movie-actions'>
          <Button
            onClick={handleSearch}
            text={'Buscar'}
          />
          <Button
            icon={<RefreshCcw />}
            onClick={() => {
              setQuery('');
              setYearQuery('');
              setFilteredMovies(movies);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="movie-list">
        {currentMovies.length > 0 ? (
          currentMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              titulo={movie.titulo}
              diretor={movie.diretor}
              ano={movie.ano}
            />
          ))
        ) : (
          <div className="no-results">
            <img src="/empty.svg" alt="Nenhum filme encontrado" />
            <p>Nenhum filme encontrado.</p>
          </div>
        )}
      </div>
      
      <div className="pagination">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          text="Anterior"
          disabled={currentPage === 1}
        />
        <span>Pág {currentPage} de {totalPages}</span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          text="Próxima"
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
};

export default MovieSearch;