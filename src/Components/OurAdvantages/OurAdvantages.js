import React, { Component } from 'react';

import GrowingAdvantage from './GrowingAdvantage'
import Safety from './Safety'
import EasyStartAdvantage from './EasyStartAdvantage'

class OurAdvantages extends Component{
    render() {
        return (    
        <section className="OurAdvantages">
            <GrowingAdvantage />
            <Safety />
            <EasyStartAdvantage />
        </section>
        )
    }
}

export default OurAdvantages;