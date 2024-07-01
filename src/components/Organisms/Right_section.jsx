import React from "react";
import Box from "../Molecules/Box";

function Right_section() {
    return (
        <>
        <div id="right">
        <Box
        description = 'Donde ver: '
        href = "https://www.max.com/mx/es" 
        target = '_blank'
        descriptiona = 'max, '
        />
        <Box
        href = "https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root"
        target = '_blank'
        descriptiona = 'Amazon prime'
        />
        </div>
        </>
    )
}

export default Right_section;