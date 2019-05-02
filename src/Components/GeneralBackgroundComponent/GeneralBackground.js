import React from 'react';

import BackgroundImage from '../../images/BackgoundImage.svg';


const GeneralBackground = (props) => (
    <section className = "GeneralBackgroundBlock">
        <img className = "GeneralBackgroundImage" src = {BackgroundImage} alt = " "/>

        {props.children}
    </section>
);

export default GeneralBackground;

