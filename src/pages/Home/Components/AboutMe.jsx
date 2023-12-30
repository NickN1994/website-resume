import fotoEvent from "../assets/DSC09713kopie.jpg";


function AboutMe() {
    return(
        <section className='column-about-me'>
            <div>
                <div className='photoBoxEvent'>
                    <img src={fotoEvent} alt="foto event" className='photoEvent'/>
                </div>
            </div>
            <div className='colum-about-me-text'>
                <h2>About me</h2>
                <p>Na 10 jaar zorg is het tijd voor Full Stack Developer.</p>
                <p>(Voorkeur Frontend)</p>

                <p>Bijna 10 jaar werk ik in de zorg. Samen met mijn partner hadden we jarenlang
                    een zorgboerderij.
                    Waarbij ik groepsbegeleider voor kinderen en jongeren met autisme en/of ADHD</p>

                <p> In 2017 maakte ik een begin in de coachingwereld door als Kindercoach aan het werk te
                    gaan.
                    Waarna ik ook al snel volwassenen ging coachen en begeleiden.
                    Dat was voor mijn partner en mij een reden op een coachingopleiding op te zetten.
                    Die we 5 jaar lang samen succesvol hebben gegeven

                    Ook sprak ik bij meerdere events op een podium voor een volle zaal.</p>

                <p> Maar nu na al die jaren had ik in de zomervakantie besloten om wat anders te gaan doen.
                    Altijd al heb ik interesse gehad in tech, games en pc.
                    Al vaker had ik gekeken naar een IT opleiding, maar nooit iets mee gedaan. Maar nu begon
                    het toch echt te kriebelen.</p>

                <p> Uiteindelijk toch besloten om de Bootcamp Full Stack Developer te volgen.
                    Graag zou ik me in deze branch ook verder willen ontwikkelen en een carrière pad
                    bewandelen.</p>

                <p> Mijn persoonlijke voorkeur ligt bij de Frontend. Graag zou ik me hier eerst verder op
                    ontwikkelen.</p>
            </div>


        </section>
    )
}

export default AboutMe;