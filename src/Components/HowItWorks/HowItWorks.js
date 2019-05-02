import React, { Component } from 'react';

import HowItWorksText from './HowItWorksText';
import HowItWorksImage from './HowItWorksImage';

class HowItWorks extends Component{
    state = {
        windowWidth: window.innerWidth
    };

    render() {
        return(
            <section className = "HowItWorksMainBox">
                <HowItWorksText />

                {this.state.windowWidth >= 880 && <HowItWorksImage />}
            </section>
        )
    }
}

export default HowItWorks;