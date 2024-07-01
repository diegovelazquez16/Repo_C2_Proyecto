import React from "react";
import Image_N_Title from "../Molecules/Image_N_Title";

function Left_section () {
    return (
        <>
        <div className="clear"></div>
        <div id="left">
            <Image_N_Title
            img = "/images/intestestellar_poster.jpg"
            href = '#'
            title = 'Interstellar'
            description = 'Protagonizada por Matthew     McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine, Casey Affleck, entre otros. ‘Interstellar’ narra la historia de Joseph Cooper, un granjero que trabajó como astronauta de la NASA, quien debe volver a colocarse su traje de viajero espacial para ir en un viaje casi sin retorno con el fin de salvar a la humanidad de la degradación ambiental que aqueja a la tierra. Al mismo tiempo, la hija de Cooper, Murph (Mackenzie Foy) reconoce un fenómeno bastante extraño en su habitación, ya que el lugar tiene una anomalía gravitacional por un motivo que se explicará a continuación.'
            class = 'ajustar-imagen'
            />
            <Image_N_Title
            img = '\images\todd.jpg'
            title = 'Crítica por Todd Maccarthi'
            description = 'Si bien técnicamente ocupa el ámbito de la ciencia ficción, esta gigantesca empresa se enfrenta a la ciencia fact— o al menos a la especulación inteligente tanto como puede en un esfuerzo por hacer que la idea de abandonar y regresar a nuestro sistema solar sea lo más dramáticamente plausible posible. Pero el público tiende a aceptar incluso premisas inverosímiles siempre que las reglas del juego sean claras. Donde Nolan da su gran salto es tratando de dotar a su aspirante a obra maestra de una emoción humana elemental, entre padre e hijo; es un injerto de género que tiene arrugas intrigantes pero que permanece imperfecto.'
            id = 'ToddM'
            />
        </div>
        </>
    )
}

export default Left_section;