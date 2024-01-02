import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import react from "../assets/react.png"
import java from "../assets/jjava.png"
import spring from "../assets/ssspring.png"
import bg from "../assets/pattern.png"
import {useEffect, useState} from "react";
import SingleCard from "./SingleCard.jsx";
import CreateSkillBox from "./CreateSkillBox.jsx";

const cardImages = [
    {src: css, matched: false, id: 1, text: 'CSS'},
    {src: html, matched: false, id: 2, text: 'HTML'},
    {src: js, matched: false, id: 3, text: 'Javascript'},
    {src: react, matched: false, id: 4, text: 'React'},
    {src: java, matched: false, id: 5, text: 'Java'},
    {src: spring, matched: false, id: 6, text: 'Spring'}
]


function Memory() {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [matchCard, setMatchCard] = useState(false);
    const [cssState, setCss] = useState(false);
    const [htmlState, setHtml] = useState(false);
    const [jsState, setJs] = useState(false);
    const [reactState, setReact] = useState(false);
    const [javaState, setJava] = useState(false);
    const [springState, setSpring] = useState(false);


    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}));
        setCards(shuffledCards);
        setTurns(0);
        setCss(false);
        setHtml(false);
        setJs(false);
        setReact(false);
        setJava(false);
        setSpring(false);
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

                if (choiceOne.src === css) {
                    setCss(true);
                }
                if (choiceOne.src === html) {
                    setHtml(true);
                }
                if (choiceOne.src === js) {
                    setJs(true);
                }
                if (choiceOne.src === react) {
                    setReact(true);
                }
                if (choiceOne.src === java) {
                    setJava(true);
                }
                if (choiceOne.src === spring) {
                    setSpring(true);
                }
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

                <h3 className='turns'>Turns: {turns}</h3>

            </div>

            <div className='skillBox'>

                {/*{cardImages.map((card) => (*/}
                {/*    <CreateSkillBox*/}
                {/*        key={card.id}*/}
                {/*        image={card.src}*/}
                {/*        text={card.text}*/}
                {/*        matched={card.matchCard}*/}
                {/*    />*/}
                {/*))}*/}

                <div className={cssState === true ? 'boxMatch' : 'boxPerSkill'}>
                    <img src={css} alt="image skill"/>
                    <h3>Css</h3>
                </div>

                <div className={htmlState === true ? 'boxMatch' : 'boxPerSkill'}>
                    <img src={html} alt="image skill"/>
                    <h3>HTML</h3>
                </div>

                <div className={jsState === true ? 'boxMatch' : 'boxPerSkill'}>
                    <img src={js} alt="image skill"/>
                    <h3>Javascript</h3>
                </div>

                <div className={reactState === true ? 'boxMatch' : 'boxPerSkill'}>
                    <img src={react} alt="image skill"/>
                    <h3>React</h3>
                </div>

                <div className={javaState === true ? 'boxMatch' : 'boxPerSkill'}>
                    <img src={java} alt="image skill"/>
                    <h3>Java</h3>
                </div>

                <div className={springState === true ? 'boxMatch' : 'boxPerSkill'}>
                    <img src={spring} alt="image skill"/>
                    <h3>Java</h3>
                </div>

            </div>

        </div>
    )
}

export default Memory;