import "./Home.css"
import fotoNick from "./assets/fotoNick.png"
import fotoEvent from "./assets/DSC09713kopie.jpg"
import createSkillBox from "./Components/CreateSkillBox.jsx";
import linkedin from "./assets/linkedin.png"
import github from "./assets/github.png"
import introduction from "./Components/Introduction.jsx";
import aboutMe from "./Components/AboutMe.jsx";
import Introduction from "./Components/Introduction.jsx";
import CreateSkillBox from "./Components/CreateSkillBox.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Memory from "./Components/Memory.jsx";


function Home() {

    return (
        <>
            <div className='outer-container first-outer'>
                <div className='inner-container'>
                    <Introduction/>
                </div>
            </div>

            {/*<div className='container'>*/}
            {/*    <h2>Unlock my skills with a game</h2>*/}
            {/*    <div className='inner-container whiteLayer'>*/}
            {/*        <Memory/>*/}
            {/*    </div>*/}

            {/*</div>*/}

            <div className='outer-container bgDark'>
                <div className='inner-container'>
                    <h2>Skills</h2>
                    <Memory/>
                    <div className='skillBox'>

                        <CreateSkillBox/>
                    </div>
                </div>
            </div>

            <div className='outer-container'>
                <div className='inner-container'>
                    <AboutMe/>
                </div>
            </div>
        </>
    )
}

export default Home;