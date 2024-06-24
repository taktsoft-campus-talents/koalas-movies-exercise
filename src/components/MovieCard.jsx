import "./MovieCard.css";

export function MovieCard({ movie, onToggleFavorite }) {
  function handleFavoriteClick() {
    onToggleFavorite();
  }

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Directed by {movie.director}</p>
      <p>{movie.released}</p>
      <p className="favorite-button" onClick={handleFavoriteClick}>
        {movie.favorite === true ? "❤️" : "🤍"}
      </p>
    </div>
  );
}
