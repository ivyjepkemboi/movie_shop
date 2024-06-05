import React, { useState, useEffect } from 'react';
import { useTitle } from '../hooks/Title';

const MovieDetails = ({id}) => {
  const [movie, setMovie] = useState();
  useTitle('current movie')

  //console.log (id)  
  
  useEffect(() => {
    const fetchMovie = () => {
      fetch(`https://freetestapi.com/api/v1/movies/${id}`)
        .then(response => response.json())
        .then(data => setMovie(data))
         };  
    fetchMovie();
    
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">{movie.title}</h1>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
        <img className="rounded-lg w-full h-auto mb-4" src={movie.poster} alt={movie.title} />
        <p className="text-gray-700 dark:text-gray-400 mb-4"><strong>Plot:</strong> {movie.plot}</p>
        <p className="text-gray-700 dark:text-gray-400 mb-4"><strong>Director:</strong> {movie.director}</p>
        <p className="text-gray-700 dark:text-gray-400 mb-4"><strong>Release Date:</strong> {movie.release_date}</p>
        <p className="text-gray-700 dark:text-gray-400 mb-4"><strong>Price:</strong> ${movie.price}</p>
        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          pay now
        </button>
     
      </div>
        
    </div>
  );
};

export default MovieDetails;
