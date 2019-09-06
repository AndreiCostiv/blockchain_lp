import React from 'react';

import TickTock from '../../images/icons/TickTock.svg'

const EasyStartAdvantage = (props) => (
    <section className = "AdventageItem">
        <div className="AdventageItemIconBlock">
            <img src = {TickTock} alt = "svg" className="AdventageItemIcon"/>
        </div>

        <div className="AdventageTextBox">    
            <h1 className="AdventageHeader">
                TICK-TOCK!
            </h1>
            
            <p className="AdventageParagraph">
                All you need for starting mining is five
                minutes and three buttons. Let’s start
            </p>
        </div>
    </section>
            
);

export default EasyStartAdvantage;