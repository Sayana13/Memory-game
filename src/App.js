import './App.css';
import {useState} from "react";
import Board from "./Board";
import {useEffect} from "react";

function App() {
    const initialPics = ['🎂', '💋', '🙌', '❤', '🎶', '🌹'];
    const [pics, setPics] = useState([
        {id: 1, visible: false, pic: null},
        {id: 2, visible: false, pic: null},
        {id: 3, visible: false, pic: null},
        {id: 4, visible: false, pic: null},
        {id: 5, visible: false, pic: null},
        {id: 6, visible: false, pic: null},
        {id: 7, visible: false, pic: null},
        {id: 8, visible: false, pic: null},
        {id: 9, visible: false, pic: null},
        {id: 10, visible: false, pic: null},
        {id: 11, visible: false, pic: null},
        {id: 12, visible: false, pic: null},
    ])
    const [count, setCount] = useState(0);

    const fillPics = () => {
        const newPics = [...pics];
        for (let i = 0; i < initialPics.length; i++) {
            for (let times = 1; times <= 2; times++) {
                let index = Math.floor(Math.random() * 12);
                while (newPics[index].pic !== null) {
                    index = Math.floor(Math.random() * 12);
                }
                newPics[index].pic = initialPics[i];
            }
        }
        setPics(newPics);
    }

    const flipCard = (cardId) => {
        const newPics = pics.map(el => {
            if (cardId === el.id) {
                return {...el, visible: true};
            }
            ;
            return el;
        })
        setPics(newPics);
        setCount(count + 1);
    }

    const checkCard = () => {
        const oddPics = pics.filter(el => el.visible === true)
            .map(el => el.pic)
            .filter((el, _, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
        let newPics = [...pics];
        if (oddPics.length >= 2) {
            newPics = pics.map(el => {
                if (oddPics.includes(el.pic)) {
                    return {...el, visible: false};
                }
                return el;
            })
        }
        setPics(newPics);
    }

    useEffect(() => {
        if (count !== 0 && count % 2 == 0) {
            setTimeout(() => checkCard(), 1000);
        }
    }, [count])

    return (
        <div className="App">
            <h1>Memory game</h1>
            <button onClick={fillPics}>start</button>
            <Board pics={pics} flipCard={flipCard}/>

        </div>
    );
}

export default App;