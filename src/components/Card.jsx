const Card = (props) => {
    return (
        <div className="card">
            <img className="card-image" src={props.image} alt={props.name} width="200" />
            <div className="card-name">
                <h2>{props.name}</h2>
                <h4>{props.price}</h4>
                <h3>{props.cuisine}</h3>
            </div>
            <a href={props.link} target="_blank" rel="noreferrer">
                <button className="card-button">View Restaurant</button>
            </a>
        </div>
    );
};

export default Card;