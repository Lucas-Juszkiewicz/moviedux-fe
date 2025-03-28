import '../styles.css';
import { useEffect, useState } from 'react';

export const MoviesGrid = () => {
    const [movies,  setMovies] = useState([]);

    useEffect(()=>{
        fetch("src\\assets\\movies.json")
        .then(response  => response.json())
        .then(data => setMovies(data))
    }, []);
  return (
    <div>{movies.length}</div>

  )
}
