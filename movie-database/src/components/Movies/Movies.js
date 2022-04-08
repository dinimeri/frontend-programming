import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data movies
import data from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
  // membuat variable state: movies
  const [movies, setMovies] = useState(data);

  // Buat funsi tambah film
  function tambahFilm() {
    const movie = {
      id: nanoid(4),
      title: "Spiral Jigsaw",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movies__container}>
          {
            movies.map(function (movie){
              return <Movie key={movie.id} movie={movie}/>
            })
          }
        </div>
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;