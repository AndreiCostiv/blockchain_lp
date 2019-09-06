import React from 'react';
import ParticlesComponent from './ParticlesComponent/ParticlesComponent'

import HeaderComponentTitle from './HeaderComponentTitle'
import TryItButton from './TryItButton'

const HeaderComponent = () => (
    <ParticlesComponent >
        <HeaderComponentTitle />   
        <TryItButton/>
    </ParticlesComponent>
);

export default HeaderComponent;