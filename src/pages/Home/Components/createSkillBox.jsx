import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import react from "../assets/react.png"
import java from "../assets/java.png"
import spring from "../assets/spring.png"

const skills = [{
    id: 1,
    image: html,
    text: "HTML"
}, {
    id: 2,
    image: css,
    text: "Css"
}, {
    image: js,
    text: "Javascript"
}, {
    id: 3,
    image: react,
    text: "React"
}, {
    id: 4,
    image: java,
    text: "Java"
}, {
    id: 5,
    image: spring,
    text: "Spring Boot"
}

];
function createSkillBox () {
return (

        skills.map((box) => {
            return (
                <div key={box.id}>
                    <img src={box.image} alt="image skill"/>
                    <p>{box.text}</p>
                </div>)

        })
)

}

export default createSkillBox;