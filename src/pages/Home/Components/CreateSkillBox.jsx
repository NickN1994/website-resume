import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import react from "../assets/react.png"
import java from "../assets/jjava.png"
import spring from "../assets/ssspring.png"

// const skills = [{
//     id: 1,
//     image: html,
//     text: 'HTML'
// }, {
//     id: 2,
//     image: css,
//     text: 'Css'
// }, {
//     id: 3,
//     image: js,
//     text: 'Javascript'
// }, {
//     id: 4,
//     image: react,
//     text: 'React'
// }, {
//     id: 5,
//     image: java,
//     text: 'React'
// }, {
//     id: 6,
//     image: spring,
//     text: 'Spring Boot'
// }
//
// ];

function CreateSkillBox(props) {

    return (
        // <div className={matched === true ? "boxMatch" : "boxPerSkill"}>
        <div className={props.matched === true ? "boxMatch" : "boxPerSkill"}>
            <img src={props.image} alt="image skill"/>
            <h3>{props.text}</h3>
        </div>
    )
}

export default CreateSkillBox;