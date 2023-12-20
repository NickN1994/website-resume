import "./Home.css"
import fotoNick from "./assets/VanuitHartEnZiel-230.jpg"

function Home () {

    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='column'>
                        <div className='column-one'>
                            <h1>Full Stack Developer in Bootcamp</h1>
                            <p>Hi, ik ben Nick en momenteel volg ik de Bootcamp bij Novi Hogeschool.
                                Naar verwachting zal ik eind februari mijn certificaat behalen</p>
                        </div>
                        <div>
                            <div className='photoBox'>
                            <img src={fotoNick} alt="foto van nick" className='fotoNick'/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className='outer-container'>
                <div className='inner-container'>
                    <section>
                        <h2>About me</h2>
                    </section>


                </div>

            </div>

        </>
    )
}

export default Home;