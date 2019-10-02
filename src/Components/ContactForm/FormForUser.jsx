import React from 'react';

//package: 
import {useSpring, animated} from 'react-spring';

const FormForUser = ({toAnimate}) => {
    //animation setup:
    const springConf = useSpring({
        from: {opacity: toAnimate ? 0 : 1},
        to: {opacity: toAnimate ? 1 : 0},
        config: {duration: toAnimate ? 250 : 0}
    })
    
    return(
        <animated.form style = {springConf} className = "AwesomeFormBox">
            <input type = "tel" className = "AwesomeFormInput" defaultValue = "+380 "/>
            <button type = "submit" className="AwesomeFormButton"> </button>
        </animated.form>
    );
};

export default FormForUser;