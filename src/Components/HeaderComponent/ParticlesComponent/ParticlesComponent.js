import React, { useState, useEffect } from 'react';

// pakage
import Particles from 'react-particles-js';

// custom hook
import useWindowSize from '../../CustomHooks/useWindowSize'

const ParticlesComponent = ({children}) => {
    const size = useWindowSize();

    return(
       <section className = 'HeaderComponent'>
            <Particles
                width = {size.width}
                height = {size.height}
                style = {ParticlesCustomStyle}
                params = {{
                    particles: {
                        number: {
                            value: size.width <= 800 ?  ((size.height + size.width) / 50) : 120
                        },
                        color: {
                            value: '#2659E2'
                        },
                        size: {
                            value: 5,
                            random: true
                        },
                        line_linked: {
                            enable_auto: true,
                            color: '#2659E2',
                            opacity: '1',
                            width: '5'
                        }
                    },
                    retina_detect: true
                }}
            />
            { children }
       </section>
    )
};

const ParticlesCustomStyle = {
    background: '#000',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1'
}

export default ParticlesComponent;