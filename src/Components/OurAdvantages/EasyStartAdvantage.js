import React from 'react';
import {Spring} from 'react-spring/renderprops';

import TickTock from '../../images/icons/TickTock.svg'

const EasyStartAdvantage = (props) => (
    <Spring
    {...props}
    >
        {
            springStyle => (
                <section className = "AdventageItem" style = {springStyle}>
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
            )
        }
    </Spring>
);

export default EasyStartAdvantage;