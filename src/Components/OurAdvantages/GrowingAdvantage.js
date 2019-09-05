import React from 'react';

import ToTheMoon from '../../images/icons/ToTheMoon.svg'

const GrowingAdvantage = () => (
    <section className = "AdventageItem">
        
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
);
   

export default GrowingAdvantage;