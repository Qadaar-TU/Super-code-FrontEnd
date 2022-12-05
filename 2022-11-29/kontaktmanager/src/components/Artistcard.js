const Artistcard = (props) => {
  return (
    <article>
      <img src={props.img} alt="" />
      <p>Name: {props.name}</p>
      <p>Popularity:{props.popularity}</p>
      <br />
      <br />
      <br />
      <br />
    </article>
  );
};

export default Artistcard;
