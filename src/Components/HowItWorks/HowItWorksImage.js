import React, {useState} from 'react'

//packages:
import {useSpring, animated} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

//context:
import Consumer from '../ContextAPI/Info';

//image:
import ArticleIMG from '../../images/ArticleIMG.png';

const HowItWorksImage = () => {
    const [toAnimate, setToAnimate] = useState(false);

    //checks when component should be animated:
    const IsItVisible = (isVisible) => (
        isVisible === undefined ? setToAnimate(false) : setToAnimate(isVisible)
    );

    //anomation config:
    const springSetup = useSpring({
        from: {opacity: toAnimate ? 0 : 1},
        to: {opacity: toAnimate ? 1 : 0},
        config: {duration: 50}
    });

    return(
        <VisibilitySensor onChange = {IsItVisible}>
            <section className = "HowItWorksImageBox">
                <Consumer>
                    {
                        context =>
                            <animated.img
                                style = {springSetup} 
                                src = {ArticleIMG} 
                                alt = " "
                                className = {
                                    context.lightTheme ? 
                                        "HowItWorksImage" 
                                        : 
                                        "HowItWorksImageDark"
                                } 
                            />    
                    }
                </Consumer>
            </section>
        </VisibilitySensor>
    )
};

export default HowItWorksImage;