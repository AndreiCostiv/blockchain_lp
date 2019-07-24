import React from 'react';
import {Spring} from 'react-spring/renderprops';

import SafetyIcon from '../../images/icons/Safety.svg'

const Safety = (props) => (
    <Spring
    {...props}
    >
        {
            springStyle => (
                <section style = {springStyle} className = "AdventageItem">
                    <div className="AdventageItemIconBlock">
                        <img src = {SafetyIcon} alt = "svg" className="AdventageItemIcon"/>
                    </div>
                    
                    <div className="AdventageTextBox">
                        <h1 className="AdventageHeader"> SAFETY! </h1>
                        
                        <p className="AdventageParagraph">
                            All your crypto money in a safe place.<br/> No one can took it, only you
                        </p>
                    </div>
                </section>
            )
        }
    </Spring>
);

export default Safety;