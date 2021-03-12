import './App.css';


function Card(props) {

    return (
        <button className="Card">{props.card.visible === false ? props.card.pic : null}</button>
    );
}

export default Card;
