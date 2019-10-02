import React from 'react';

//package:
import {useSpring, animated} from 'react-spring';

const GliderItem = ({review, clientPhoto, clientName, clientJob, i, toAnimate}) => {
    //animation setup:
    const springSetup = useSpring({
        from: {opacity: toAnimate ? 0 : 1},
        to: {opacity: toAnimate? 1 : 0},
        delay: toAnimate ? (i * 200) : 0,
        config: {duration: 250}
    });

    return(
        <animated.section style = {springSetup}>
            <span className = 'clientReview'>{review}</span>
    
            <section className = 'clientProfile'>
                <img className = 'clientPhoto' src = {clientPhoto} alt = 'img'/> 
    
                <section className = 'clientTitle'>
                    <h3 className = 'clientName'>{clientName}</h3>
                    <span className = 'clientJob'>{clientJob}</span>
                </section>
            </section>
        </animated.section>
    )
};

export default GliderItem;
