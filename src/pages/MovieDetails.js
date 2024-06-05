import React, { useState, useEffect } from 'react';
import { useTitle } from '../hooks/Title';
import {useNavigate, useParams} from 'react-router-dom'


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const navigate = useNavigate();
  useTitle('Current Movie');

  //console.log (id)  
  
  useEffect(() => {
    const fetchMovie = () => {
      fetch(`https://freetestapi.com/api/v1/movies/${id}`)
        .then(response => response.json())
        .then(data => setMovie(data))
         };  
    fetchMovie();
    
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  
  const handlePayNowClick = () => {
    navigate('/Timer');
  }

  return (
    <div className=" h-1/4 p-4 justify-center items-center">
      <h1 className="text-2xl mb-6 text-center font-bold">{movie.title}</h1>
      <div className="border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-6 flex flex-col md:flex-row items-center md:items-start w-1/2 mx-auto">
      <img className="rounded-lg w-full md:w-48 h-auto mb-6 md:mr-6" src={movie.poster} alt={movie.title} />
        <div className="md:w-1/2">
          <p className="text-gray-700 dark:text-gray-400 mb-4"><strong>Plot:</strong> {movie.plot}</p>
          <p className="text-gray-700 dark:text-gray-400 mb-4"><strong>Director:</strong> {movie.director}</p>
          <p className="text-gray-700 dark:text-gray-400 mb-4"><strong>Release Date:</strong> {movie.release_date}</p>
          <p className="text-gray-700 dark:text-gray-400 mb-6"><strong>Price:</strong> ${movie.price}</p>
          <button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handlePayNowClick}
          >
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;