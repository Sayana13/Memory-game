import './App.css';
import {useState} from "react";
import Board from "./Board";

const initialPics = ['😊', '❤', '🙌', '😁', '💋', '🎂'];

function App() {
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
    ]);

    const fillPics = () => {
        const newPics = [...pics];
        for (let i = 0; i <= initialPics.length; i++) {
            for (let times = 1; times < 3; times++) {
                let index = Math.floor(Math.random() * 12);

                while (newPics[index].pic !== null) {
                    index = Math.floor(Math.random() * 12);
                }
                newPics[index].pic = initialPics[i];
            }
        }
        setPics(newPics);
    }

    return (
        <div className="App">
            <button onClick={fillPics}>Start</button>
            <Board pics={pics}/>


        </div>
    );
}

export default App;