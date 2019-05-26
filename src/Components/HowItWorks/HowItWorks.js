import React, { Component } from 'react';

import HowItWorksText from './HowItWorksText';
import HowItWorksImage from './HowItWorksImage';

class HowItWorks extends Component{
    state = {
        windowWidth: window.innerWidth
    };

    updateHowItWorks = () => {
        this.setState({
            windowWidth: window.innerWidth
        })
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateHowItWorks)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateHowItWorks)
    }

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