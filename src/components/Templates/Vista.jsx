import React from 'react';
import Header from '../Organisms/Header';
import Left_section from '../Organisms/Left_section';
import Right_section from '../Organisms/Right_section';

const Vista  = () => {
    return (
        <>
       <div >
        <Header/>
            <main>
                <Left_section/>
                <Right_section/>
            </main>   
        </div> 
       </>
    )
}

export default Vista;