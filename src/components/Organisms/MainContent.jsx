import React from 'react';
import Card from '../Molecules/Card';

function MainContent() {
    return (
        <div className="main-content">
            <Card
                href="index.html"
                image="/images/intestestellar_poster.jpg"
                alt="Interstellar"
                description="Protagonizada por Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine, Casey Affleck, entre otros. ‘Interstellar’ narra la historia de Joseph Cooper, un granjero que trabajó como astronauta de la NASA, quien debe volver a colocarse su traje de viajero espacial para ir en un viaje casi sin retorno con el fin de salvar a la humanidad de la degradación ambiental que aqueja a la tierra. Al mismo tiempo, la hija de Cooper, Murph (Mackenzie Foy) reconoce un fenómeno bastante extraño en su habitación, ya que el lugar tiene una anomalía gravitacional por un motivo que se explicará a continuación
"
            />
            <Card
                href="vista2.html"
                image="/images/Guerra Z_poster.jpg"
                alt="Unknown Movie"
                description="Gerry Lane, antiguo trabajador de las Naciones Unidas, está en el coche con su familia, en Filadelfia, cuando de repente se desata el caos en la ciudad. Gerry ve cómo las personas saltan unas sobre otras, y ocurre algo que lo deja atónito: las personas se están mordiendo unas a otras y desarrollan una gran violencia. Al presenciar esto, ve el momento exacto en el que una persona muerde a otro hombre y Gerry cuenta el tiempo que ocurre desde la mordida hasta el cambio, sufriendo la persona violentas convulsiones. A partir de esto, la persona obtiene un comportamiento animalístico y violento, por lo que Gerry deduce que están siendo infectados con alguna enfermedad extraña. Entonces recibe una llamada de Thierry Umutuni, su antiguo amigo y actual secretario general adjunto de la ONU. Éste le pide que vuelva a colaborar con la organización, y a cambio, les ofrece evacuarlos en helicóptero."
            />
        </div>
    );
}

export default MainContent;
