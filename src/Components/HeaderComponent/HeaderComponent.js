import React from 'react';

//Package:
import ParticlesComponent from './ParticlesComponent/ParticlesComponent';

//Context:
import Consumer from '../ContextAPI/Info'

//Components:
import HeaderComponentTitle from './HeaderComponentTitle';
import TryItButton from './TryItButton';

const HeaderComponent = () => (
    <Consumer>
        {
            context => (
                <ParticlesComponent lightTheme = {context.lightTheme}>
                    <HeaderComponentTitle />   
                    <TryItButton/>
                </ParticlesComponent>
            )
        }
    </Consumer>
);

export default HeaderComponent;