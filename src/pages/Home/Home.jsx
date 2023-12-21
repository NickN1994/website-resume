import "./Home.css"
import fotoNick from "./assets/VanuitHartEnZiel-230.jpg"
import fotoEvent from "./assets/DSC09713kopie.jpg"

function Home() {

    return (
        <>
            <div className='outer-container'>
                <div className='inner-container'>
                    <section className='column'>
                        <div className='column-one'>
                            <h1>Hi, ik ben <span>Nick</span></h1>
                            <p>Ik volg momenteel de Bootcamp tot Full Stack Developer bij Novi Hogeschool.
                                Naar verwachting zal ik eind februari mijn diploma in ontvangst nemen</p>
                            <p>Tijdens deze opleiding werk ik met HTML, CSS, JavaScript, React, Java & Spring Boot</p>
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
                    <section className='column'>
                        <div>
                            <div className='photoBoxEvent'>
                            <img src={fotoEvent} alt="foto event" className='photoEvent'/>
                            </div>
                        </div>
                        <div>
                            <h2>About me</h2>
                            <p>Na 10 jaar zorg is het tijd voor Full Stack Developer. (Voorkeur Frontend)

                                Bijna 10 jaar werk ik momenteel in de zorg. Samen met mijn partner hadden we jarenlang een zorgboerderij.
                                Waarbij ik groepsbegeleider was op de dagbesteding, dagopvang en logeeropvang voor kinderen en jongeren met autisme en/of ADHD. Momenteel bieden we nog voor één dag in de week dagbesteding aan.

                                Waarna ik vervolgens in de coachingwereld terecht kwam. Jarenlang heb ik volwassenen en kinderen gecoacht.
                                Samen met mijn partner ook een succesvolle coachingopleiding opgezet en samen gegeven.

                                Maar nu na al die jaren had ik in de zomervakantie besloten om wat anders te gaan doen.
                                Altijd al heb ik interesse gehad in tech, games en pc.
                                Al vaker had ik gekeken naar een IT opleiding, maar nooit iets mee gedaan. Maar nu begon het toch te kriebelen.

                                Uiteindelijk toch besloten om de Bootcamp Full Stack Developer te volgen.
                                Graag zou ik me in deze branch ook verder willen ontwikkelen en een carrière pad bewandelen.

                                Mijn persoonlijke voorkeur ligt bij de Frontend. Graag zou ik me hier eerst verder op ontwikkelen.</p>
                        </div>


                    </section>


                </div>

            </div>

        </>
    )
}

export default Home;