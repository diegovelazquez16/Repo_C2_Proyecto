import React from 'react';
import Recommendation from '../Molecules/Recommendation';

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>Recomendaciones</h2>
            <Recommendation href="https://youtu.be/MVvGSBKV504?si=v_GDDcWN1aa2Twhz" image="/images/oppenheimer.webp" alt="Oppenheimer" />
            <Recommendation href="https://youtu.be/BpdDN9d9Jio?si=aPM-U9p81pceR8Ku" image="/images/a-quiet-place-2.webp" alt="Quiet Place Part II" />
            <Recommendation href="https://youtu.be/1ovgxN2VWNc?si=04r3rpjrpESL-R6N" image="/images/train.webp" alt="Train to Busan" />
        </aside>
    );
}

export default Sidebar;
