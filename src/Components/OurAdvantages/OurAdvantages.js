import React, { Component } from 'react';

import GrowingAdventage from './GrowingAdventage'
import Safety from './Safety'
import EasyStartAdventage from './EasyStartAdventage'

class OurAdvantages extends Component {
    render() {
        return (
            <section className = "OurAdvantages">
                <GrowingAdventage />
                <Safety />
                <EasyStartAdventage />
            </section>
        )
    }
}

export default OurAdvantages;