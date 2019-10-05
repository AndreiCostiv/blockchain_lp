import React from 'react';

//components
import HowItWorksText from './HowItWorksText';
import HowItWorksImage from './HowItWorksImage';

//custom hook:
import useWindowSize from '../CustomHooks/useWindowSize';

const HowItWorks = () => {
    const {width} = useWindowSize();

    return(
        <section className = "HowItWorksMainBox">
            <HowItWorksText />

            {width >= 880 && <HowItWorksImage />}
        </section>        
    )
};

export default HowItWorks;