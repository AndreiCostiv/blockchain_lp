import React, {useState, useEffect} from 'react';

//packages: 
import {useSpring, animated} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

const AdvantageItem = ({item, i}) => {
    //state
    const [toAnimate, setToAnimate] = useState(false);

    //checks element's position:
    const CheckVisibility = (isVisible) => {        
        isVisible === undefined ? setToAnimate(false) : setToAnimate(isVisible)
    };


    //config for animations:
    const springShow = useSpring({
        from: {opacity: toAnimate ? 0 : 1},
        to: {opacity: toAnimate ? 1 : 0},
        delay: toAnimate ?  (i * 200) : 0
    })


    return(
        <VisibilitySensor onChange = {CheckVisibility}>
            <animated.section style = {springShow} className = "AdventageItem">
                <div className="AdventageItemIconBlock">
                    <img src = {item.img} alt = "svg" className="AdventageItemIcon"/>
                </div>

                <div className="AdventageTextBox">    
                    <h1 className="AdventageHeader">
                        {item.title}
                    </h1>
                            
                    <p className="AdventageParagraph">
                        {item.text}
                    </p>
                </div>
            </animated.section>
        </VisibilitySensor>
    )    
};

export default AdvantageItem;