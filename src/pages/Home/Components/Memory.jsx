import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import react from "../assets/react.png"
import java from "../assets/jjava.png"
import spring from "../assets/ssspring.png"
import bg from "../assets/pattern.png"
import {useEffect, useState} from "react";
import SingleCard from "./SingleCard.jsx";

const cardImages = [
    {"src": css, matched: false},
    {"src": html, matched: false},
    {"src": js, matched: false},
    {"src": react, matched: false},
    {"src": java, matched: false},
    {"src": spring, matched: false},
]

function Memory() {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);


    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}));
        setCards(shuffledCards);
        setTurns(0);
    }

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card;
                        }
                    })
                })
                resetCards()
            } else {
                setTimeout(() => resetCards(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])


    const resetCards = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false);
    }

    return (
        <div className='memoryBox'>
            <button onClick={shuffleCards}>New Game</button>
            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                    />
                ))}
            </div>
            <h3 className='turns'>Turns: {turns}</h3>
        </div>
    )
}

export default Memory;