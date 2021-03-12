import Card from "./Card";

function Board(props) {

    return (
        <div className='Board'>

            {props.pics.map(el =>
                <Card key={el.id} card={el} flipCard={props.flipCard}/>
            )}
        </div>

    );
}

export default Board;
