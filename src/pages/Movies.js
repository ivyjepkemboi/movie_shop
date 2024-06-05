import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/Title';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useTitle('all movies')

  useEffect(() => {
    const fetchMovies = () => {
      fetch('https://freetestapi.com/api/v1/movies')
        .then(response => response.json())
        .then(data => setMovies(data))
          };
    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl mb-4">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map(movie => (
          <div key={movie.id} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-full h-48 object-cover" src={movie.poster} alt={movie.title} />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden whitespace-nowrap overflow-ellipsis" style={{ maxHeight: '2.4rem' }}>
                {movie.plot}
               </p>

               {/* Link to movie details page */}
               <Link to={`/movies/${movie.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg">
                Buy now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
