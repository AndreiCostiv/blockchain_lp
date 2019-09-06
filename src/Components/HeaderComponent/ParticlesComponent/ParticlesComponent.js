import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';

const ParticlesComponent = ({children}) => {
    const size = useWindowSize();

    function useWindowSize() {
        const isClient = typeof window === 'object';
      
        function getSize() {
          return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
          };
        }
      
        const [windowSize, setWindowSize] = useState(getSize);
      
        useEffect(() => {
          if (!isClient) {
            return false;
          }
          
          function handleResize() {
            setWindowSize(getSize());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []); // Empty array ensures that effect is only run on mount and unmount
      
        return windowSize;
    }

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