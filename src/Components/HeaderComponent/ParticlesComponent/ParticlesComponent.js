import React, { useState, useEffect } from 'react';

// package
import Particles from 'react-particles-js';

// custom hook
import useWindowSize from '../../CustomHooks/useWindowSize'

const ParticlesComponent = ({ children, lightTheme }) => {
    const size = useWindowSize();
    const [particlesColor, setParticlesColor] = useState(lightTheme ? '#2659E2' : '#B0FFDE')

    useEffect (() => {
        setParticlesColor(lightTheme ? '#2659E2' : '#B0FFDE')
    })

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
                            value: particlesColor
                        },
                        size: {
                            value: 5,
                            random: true
                        },
                        line_linked: {
                            enable_auto: true,
                            color: particlesColor,
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