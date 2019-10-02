import React, {useState} from 'react';

//package:
import VisibilitySensor from 'react-visibility-sensor';

//component:
import CharComponent from './CharComponent'


const
    Title = `HOW IT WORKS?`,
    Paragraph =
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.`;

const HowItWorksText = () => {
    const [toAnimate, setToAnimate] = useState(false);

    //set's animation for component:
    const isItVisible = (isVisible) => (
        isVisible === undefined ? setToAnimate(false) : setToAnimate(isVisible)
    );
    
    //convetring strings to arrays:
    const arrParagraph = Array.from(Paragraph);
    const arrTitle = Array.from(Title);

    return (
        <VisibilitySensor onChange = {isItVisible}>
            <section className = "HowItWorksText">
                
                <h1 className="HowItWorksTitle" >
                    {arrTitle.map(
                        (item ,i) => 
                            <CharComponent 
                                key = {i}
                                item = {item}
                                i = {i}
                                toAnimate = {toAnimate}
                            />
                    )}                    
                </h1>

                <div className = "HowItWorksParagraph">
                    {arrParagraph.map(
                        (item ,i) => 
                            <CharComponent 
                                key = {i}
                                item = {item}
                                i = {i}
                                toAnimate = {toAnimate}
                            />
                    )}          
                </div>

            </section>
        </VisibilitySensor>
    );
};

export default HowItWorksText;