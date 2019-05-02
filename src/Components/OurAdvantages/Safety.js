import React from 'react';

import SafetyIcon from '../../images/icons/Safety.svg'

const Safety = () => (
    <section className = "AdventageItem">
        <div className="AdventageItemIconBlock">
            <img src = {SafetyIcon} alt = "svg" className="AdventageItemIcon"/>
        </div>

        <div className="AdventageTextBox">
            <h1 className="AdventageHeader">
                SAFETY!
            </h1>
            <p className="AdventageParagraph">
                All your crypto money in a safe place.<br/> No one can took it, only you
            </p>
        </div>
    </section>
);

export default Safety;