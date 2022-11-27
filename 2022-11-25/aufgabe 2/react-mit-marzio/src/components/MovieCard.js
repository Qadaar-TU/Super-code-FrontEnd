import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <article>
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.director}</p>
      <p>{props.duration}</p>
      <p>{props.rate}</p>
      <div>{props.genre.map((item) => item)}</div>
    </article>
  );
};

export default MovieCard;
