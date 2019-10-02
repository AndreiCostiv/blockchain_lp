import React, {useState} from 'react';

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
        delay: toAnimate ?  (i * 200) : 0,
        config: {duration: 350}
    });

    return(
        <VisibilitySensor onChange = {CheckVisibility}>
            <animated.section style = {springShow} className = "AdventageItem">
                <div className = 'AdventageItemIconBlock'>
                    <img src = {item.img} alt = "svg" className="AdventageItemIcon"/>
                </div>

                <div className = 'AdventageTextBox'>    
                    <h1 className = 'AdventageHeader' children = {item.title} />    
                    <p className = 'AdventageParagraph' children = {item.text}/>
                </div>
            </animated.section>
        </VisibilitySensor>
    )    
};

export default AdvantageItem;