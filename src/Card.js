import './App.css';


function Card(props) {

    return (
        <button onClick={() => props.flipCard(props.card.id)}
                className="Card">
            {props.card.visible ? props.card.pic : null}
        </button>
    );
}

export default Card;
