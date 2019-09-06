import React from 'react';

import {Spring} from 'react-spring/renderprops';
import Consumer from '../ContextAPI/Info';

const  ThemeTrigger  = () => {
        return (
            <Consumer>
                {
                    value =>
                    <TriggerBox
                        TriggerMethod = {value.TriggerMethod}
                        to = { value.lightTheme ? 
                            {marginLeft: 0}
                        :
                            {marginLeft: 77}
                        }

                        leave = { value.lightTheme ? 
                            {marginLeft: 0}
                        :
                            {marginLeft: 77}
                        }
                    />
                }
            </Consumer>
        );
};

const TriggerBox = ({TriggerMethod, ...props}) => {
    return(
        <Spring {...props}>
            {springStyle => (
                <section className = "ThemeTrigger">
                    <section style = {springStyle} className="TriggerCircle" onClick = {TriggerMethod} />
                </section>
            )}
        </Spring> 
    )
};

export default ThemeTrigger;