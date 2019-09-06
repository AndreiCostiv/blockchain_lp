import React, {useState, useEffect} from 'react';

import {Spring} from 'react-spring/renderprops';
import Consumer from '../ContextAPI/Info';

const  ThemeTrigger  = () => {
    const [width, setWidth] = useState(window.innerWidth)
    
    useEffect (() => setWidth(window.innerWidth))

    return (
        <Consumer>
        {value =>    
            width >= 880 ?
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
                    : 
                <TriggerBox
                    TriggerMethod = {value.TriggerMethod}
                    to = { value.lightTheme ? 
                        {marginLeft: 0}
                            :
                        {marginLeft: 22}
                    }
                    leave = { value.lightTheme ?
                        {marginLeft: 0}
                            :
                        {marginLeft: 22}
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