import Card from "./Card";

function Board(props) {

    return (
        <div className='Board'>

            {props.pics.map(card =>
                <Card card={card}/>
            )}
        </div>

    );
}

export default Board;
