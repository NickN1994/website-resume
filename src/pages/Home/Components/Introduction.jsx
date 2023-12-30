import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import fotoNick from "../assets/fotoNick.png";

function Introduction () {
    return (
        <section className='column'>
            <div className='column-one'>
                <h1>Hi, ik ben <span>Nick</span></h1>
                <p>Ik volg momenteel de Bootcamp tot Full Stack Developer bij Novi Hogeschool.
                    Naar verwachting zal ik eind februari mijn diploma in ontvangst nemen</p>
                <div>
                    <img className='icon' src={linkedin} alt="linkedinimg"/>
                    <img className='icon' src={github} alt="linkedinimg"/>
                </div>
            </div>
            <div>
                <div className='photoBox'>
                    <img src={fotoNick} alt="foto van nick" className='fotoNick'/>
                </div>
            </div>
        </section>
    )
}

export default Introduction;