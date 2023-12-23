import "./Home.css"
import fotoNick from "./assets/fotoNick.png"
import fotoEvent from "./assets/DSC09713kopie.jpg"
import createSkillBox from "./Components/createSkillBox.jsx";
import linkedin from "./assets/linkedin.png"
import github from "./assets/github.png"
import introduction from "./Components/Introduction.jsx";
import aboutMe from "./Components/AboutMe.jsx";

function Home() {

    return (
        <>
            <div className='outer-container first-outer'>
                <div className='inner-container'>
                    {introduction()}
                </div>
            </div>

            <div className='outer-container bgDark'>
                <div className='inner-container'>
                    <h2>Skills</h2>
                    <div className='skillBox'>
                        {createSkillBox()}
                    </div>
                </div>
            </div>

            <div className='outer-container'>
                <div className='inner-container'>
                    {aboutMe()}
                </div>
            </div>
        </>
    )
}

export default Home;