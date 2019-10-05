import React from 'react';

//package: 
import {useSpring, animated} from 'react-spring';

const FormForUser = ({isVisible}) => {
    //animation setup:
    const springConf = useSpring({
        from: {opacity: isVisible ? 0 : 1},
        to: {opacity: isVisible ? 1 : 0},
        config: {duration: isVisible ? 250 : 0},
        delay: 0
    })
    
    return(
        <animated.form style = {springConf} className = "AwesomeFormBox">
            <input type = "tel" className = "AwesomeFormInput" defaultValue = "+380 "/>
            <button type = "submit" className="AwesomeFormButton"> </button>
        </animated.form>
    );
};

export default FormForUser;