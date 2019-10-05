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
                        {
                            marginLeft: 0, 
                            backgroundColor: 'rgba(0, 194, 255, 0.75)'
                        }
                            :
                        {
                            marginLeft: 77,
                            backgroundColor: 'rgba(176, 255, 222, 0.75)'
                        }
                    }


                    leave = { value.lightTheme ?
                        {
                            marginLeft: 0, 
                            backgroundColor: 'rgba(0, 194, 255, 0.75)'
                        }
                            :
                        {
                            marginLeft: 77,
                            backgroundColor: 'rgba(176, 255, 222, 0.75)'
                        }
                    }
                />        
                    : 
                <TriggerBox
                    TriggerMethod = {value.TriggerMethod}
                    to = { value.lightTheme ? 
                        {
                            marginLeft: 0, 
                            backgroundColor: 'rgba(0, 194, 255, 0.75)'
                        }
                            :
                        {
                            marginLeft: 22,
                            backgroundColor: 'rgba(176, 255, 222, 0.75)'
                        }
                    }
                    leave = { value.lightTheme ?
                        {   
                            marginLeft: 0, 
                            backgroundColor: 'rgba(0, 194, 255, 0.75)'
                        }
                            :
                        {
                            marginLeft: 22,
                            backgroundColor: 'rgba(176, 255, 222, 0.75)'
                        }
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
                <section onClick = {TriggerMethod}  className = "ThemeTrigger">
                    <section style = {springStyle} className="TriggerCircle" />
                </section>
            )}
        </Spring> 
    )
};

export default ThemeTrigger;