import { Link } from "react-router-dom";

const NewsItem = (props) => {
  //   console.log(props);
  return (
    <div className="grid-item">
      <img src={props.image} alt="newsbild" />
      <h2>{props.title}</h2>
      <a href={props.url}>Read more</a>
    </div>
  );
};

export default NewsItem;
