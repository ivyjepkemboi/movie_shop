import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import Timer from './pages/Timer';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Movies/>} />
          <Route path="/movies/:id" element={<MovieDetails />}/>
          <Route path="/Timer" element={<Timer/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
