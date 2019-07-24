import React, { Component } from 'react';

import Consumer from '../ContextAPI/Info'
import GrowingAdvantage from './GrowingAdvantage'
import Safety from './Safety'
import EasyStartAdvantage from './EasyStartAdvantage'

class OurAdvantages extends Component{
    render() {
        return (
            <Consumer>
                {
                    context => (                      
                        
                            context.ScrollbarPosition >= 200
                            ?
                            <section className="OurAdvantages">
                                <GrowingAdvantage 
                                    config = {{duration: 250}}
                                    from = {{opacity: 0}}
                                    to = {{opacity: 1}}                                
                                />
                                <Safety
                                    config = {{duration: 250, delay: 175}}
                                    from = {{opacity: 0}}
                                    to = {{opacity: 1}}
                                />
                                <EasyStartAdvantage 
                                    config = {{duration: 250, delay: 250}}
                                    from = {{opacity: 0}}
                                    to = {{opacity: 1}}                                
                                />
                            </section>
                        :
                            <section className="OurAdvantages">
                                <GrowingAdvantage 
                                    config = {{duration: 100}}
                                    to = {{opacity: 0}}                                
                                />
                                <Safety
                                    config = {{duration: 100}}
                                    to = {{opacity: 0}}
                                />
                                <EasyStartAdvantage 
                                    config = {{duration: 100}}
                                    to = {{opacity: 0}}                                
                                />
                            </section>
                    )
                }
            </Consumer>
        )
    }
}

export default OurAdvantages;