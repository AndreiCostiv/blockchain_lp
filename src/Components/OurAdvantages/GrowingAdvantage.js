import React from 'react';
import {Spring} from 'react-spring/renderprops';

import ToTheMoon from '../../images/icons/ToTheMoon.svg'

const GrowingAdvantage = (props) => (
    <Spring
    {...props}
    >
        {
            springStyle => (
                <section className = "AdventageItem" style = {springStyle}>
                    <div className = "AdventageItemIconBlock">
                        <img src = {ToTheMoon} alt = "svg" className="AdventageItemIcon"/>
                    </div>

                    <div className="AdventageTextBox">
                        <h1 className="AdventageHeader">
                            TOO THE MOON!
                        </h1>
                        <p className="AdventageParagraph">
                            All cryptocurrencies are growing up
                            and you can use it right now
                        </p>
                    </div>
                </section>
            )
        }
    </Spring>
);

export default GrowingAdvantage;