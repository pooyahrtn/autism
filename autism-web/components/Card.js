const Card = (props) => (
    <button className="card" onClick={props.onClick}>
        <img className="card__img" src={props.image}/>
    </button>
);

export default Card;
