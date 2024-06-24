import "./App.css";
import { MovieCard } from "./components/MovieCard";
import { initialMovies } from "./data/initialMovies";
import { useState } from "react";

function App() {
  // State variables
  const [movies, setMovies] = useState(initialMovies);

  function handleToggleFavorite(id) {
    setMovies(
      movies.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            favorite: !movie.favorite,
          };
        } else {
          return movie;
        }
      })
    );
  }

  return (
    <>
      <h1>Movies Exercise</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="card-list">
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                onToggleFavorite={() => {
                  handleToggleFavorite(movie.id);
                }}
              />
            );
          })}
        </div>
        <div style={{ maxWidth: "50%" }}>
          <h2>Current State</h2>
          <p>{JSON.stringify(movies)}</p>
        </div>
      </div>
    </>
  );
}

export default App;
