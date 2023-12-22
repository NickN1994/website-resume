import html from "./assets/html.png"
import css from "./assets/css.png"
import js from "./assets/javascript.png"
import react from "./assets/react.png"
import java from "./assets/java.png"
import spring from "./assets/spring.png"



function createSkillBox () {

    const skills = [{
        image: html,
        text: "HTML"
    }, {
        image: css,
        text: "Css"
    }, {
        image: js,
        text: "Javascript"
    }, {
        image: react,
        text: "React"
    }, {
        image: java,
        text: "Java"
    }, {
        image: spring,
        text: "Spring Boot"
    }

    ];


        skills.map((box) => {
            return (
                <div>
                    <img src={box.image} alt="image skill"/>
                    <p>{box.text}</p>
                </div>
            )
        })
}

export default createSkillBox;