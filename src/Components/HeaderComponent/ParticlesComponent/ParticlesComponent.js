import React, { useState , useEffect} from 'react';
import Particles from 'react-particles-js';

const ParticlesComponent = ({children}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    useEffect(
        () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        });

    return(
       <section className = 'HeaderComponent'>
            <Particles
                width = {width}
                
                style = {ParticlesCustomStyle}

                params = {{
                    particles: {
                        number: {
                            value: 120
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