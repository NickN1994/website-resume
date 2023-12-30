import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import react from "../assets/react.png"
import java from "../assets/jjava.png"
import spring from "../assets/ssspring.png"
import bg from "../assets/pattern.png"
import {useState} from "react";

const cardImages = [
    {"src": css},
    {"src": html},
    {"src": js},
    {"src": react},
    {"src": java},
    {"src": spring},
]

function Memory () {

const [cards, setCards] = useState([]);
const [turns, setTurns] = useState(0);

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5 )
            .map((card) => ({...card, id: Math.random()}));
        setCards(shuffledCards);
        setTurns(0);
    }

    console.log(cards, turns);

    return (
        <div className='memoryBox'>
            <button onClick={shuffleCards}>New Game</button>
            <div className="card-grid">
            {cards.map(card => (
                <div className='card' key={card.id}>
                    <div>
                        <img className='front-img' src={card.src} alt="card front"/>
                        <img className='back-img' src={bg} alt="card back"/>
                    </div>
                </div>
            ))}
            <div>
            </div>

            </div>
        </div>
    )
}

export default Memory;