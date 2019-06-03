import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops';

import Consumer from '../ContextAPI/Info'
import GrowingAdvantage from './GrowingAdvantage'
import Safety from './Safety'
import EasyStartAdvantage from './EasyStartAdvantage'

class OurAdvantages extends Component{
    Handler  = () => {
        
    };

    render() {
        return (
            <section className="OurAdvantages" onClick = {this.Handler}>
                <Consumer>
                    {
                        context =>
                            <React.Fragment>
                                <GrowingAdvantage />
                                <Safety />
                                <EasyStartAdvantage />
                            </React.Fragment>
                    }
                </Consumer>
            </section>
        )
    }
};

export default OurAdvantages;