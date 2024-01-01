import bg from "../assets/pattern.png"
import "./SingleCard.css"

function SingleCard (props) {

    const handleClick = () => {
        if (!props.disabled) {
            props.handleChoice(props.card)
        }
    }

    return (
        <div className='card'>
            <div className={props.flipped ? "flipped" : ""}>
                <img className='front-img' src={props.card.src} alt="card front"/>
                <img
                    className='back-img'
                    src={bg}
                    onClick={handleClick}
                    alt="card back"/>
            </div>
        </div>
    )
}

export default SingleCard;