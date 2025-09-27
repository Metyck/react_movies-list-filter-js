import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';
import { Header } from './components/Header/Header';

function filterMoviesByQuerry(movies, querry) {
  return movies.filter(
    ({ title, description }) =>
      title.toLowerCase().includes(querry.toLowerCase()) ||
      description.toLowerCase().includes(querry.toLowerCase()),
  );
}

export const App = () => {
  const [query, setQuerry] = useState('');
  const visibleMovies = filterMoviesByQuerry(moviesFromServer, query);

  return (
    <div className="page">
      <div className="page-content">
        <Header
          querry={query}
          filterBy={newQuerry => {
            setQuerry(newQuerry);
          }}
        />

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
