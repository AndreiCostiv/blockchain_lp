import React, { useState , useEffect} from 'react';
import Particles from 'react-particles-js';

const ParticlesComponent = () => {
    const [width, setWidth] = useState(document.innerWidth);
    const [height, setHeight] = useState(document.innerHeight);


    useEffect(
        () => {
            setWidth(document.innerWidth);
            setHeight(document.innerHeight);
        });

    return(
        <Particles
            width = {width}
            height = {height}
            style = { positionedParticles }

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
                }
            }}
        />
    )
};

const positionedParticles = {
    backgroundColor: '#171515',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1'
};

export default ParticlesComponent;