import { Movie } from '../types/Movie';
import '../styles.css';
import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';

export const MoviesGrid = () => {
    const [movies,  setMovies] = useState<Movie[]>([]);

    useEffect(()=>{
        fetch("movies.json")
        .then(response  => response.json())
        .then(data => setMovies(data))
    }, []);
  return (
    <div className='movies-grid'>
      {
        movies.map(movie => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))
      }
      </div>
  )
}
