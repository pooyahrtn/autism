const Card = props => (
  <button className="card" onClick={props.onClick}>
    <img
      className="card__img"
      src={props.image}
      onLoadStartCapture={() => {
        console.log("started");
      }}
      onLoad={() => {
        props.onLoad && props.onLoad();
      }}
    />
  </button>
);

export default Card;
