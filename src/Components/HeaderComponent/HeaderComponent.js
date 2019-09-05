import React from 'react';
import ParticlesComponent from './ParticlesComponent/ParticlesComponent'

import HeaderComponentTitle from './HeaderComponentTitle'
import TryItButton from './TryItButton'

const HeaderComponent = (props) => (
    <section className = "HeaderComponent">
        <ParticlesComponent />

        <HeaderComponentTitle />

        <TryItButton scrollOnClick = {props.scrollOnClick}/>
    </section>
);

export default HeaderComponent;