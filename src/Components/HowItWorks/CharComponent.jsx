import React from 'react';

//package: 
import {useSpring, animated} from 'react-spring';

const CharComponent = ({item, i, toAnimate}) => {
    //setup for animation:
    const springConfig = useSpring({
        from: {opacity: toAnimate ? 0 : 1},
        to: {opacity: toAnimate ? 1 : 0},
        delay: toAnimate ? (i * 1) : 0,
        duration: 1
    });

    return(
        <animated.span style = {springConfig}>
            {item}
        </animated.span>
    )
};

export default CharComponent;