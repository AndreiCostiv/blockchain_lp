import React from 'react';

//comoponent:
import CharComponent from '../CharComponent/CharComponent'

//strings: 
const formHeader = `Still have some questions?`;
const fromTitle = `Leave us your number and we will call you`;

const FormTextContent = ({toAnimate}) => {
    const arrHeader = Array.from(formHeader);
    const arrTitle = Array.from(fromTitle);
    
    return(
        <>
            <h2 className = 'ContactFormHeader'>
                {arrHeader.map((item, i) => 
                    <CharComponent 
                        item = {item}
                        i = {i}
                        key = {i}
                        toAnimate = {toAnimate}
                    />
                )}
            </h2>

            <p className = 'ContactFormTitle'>
                {arrTitle.map((item, i) => 
                    <CharComponent 
                        item = {item}
                        i = {i}
                        key = {i}
                        toAnimate = {toAnimate}
                    />
                )}
            </p>
        </>
    );
};

export default FormTextContent;