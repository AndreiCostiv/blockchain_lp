import React, {useState} from 'react';

//components:
import SliderComponent from '../SliderComponent/SliderComponent';
import CharComponent from '../HowItWorks/CharComponent';

//package:
import VisibilitySensor from 'react-visibility-sensor';

const title = `Our client reviews`;

const ClientsReviews = () => {
    const [toAnimate, setToAnimate] = useState(false);

    const IsItVisible = (isVisible) => 
        isVisible === undefined ? setToAnimate(false) : setToAnimate(isVisible);

    const arr = Array.from(title);

    return(
        <VisibilitySensor onChange = {IsItVisible}>
            <section className = "ClientReviews">
                <h1 className="ClientReviewsHeader">
                    {arr.map((item, i) =>
                        <CharComponent 
                            item = {item}
                            key = {i}
                            i = {i}
                            toAnimate = {toAnimate}
                        />
                    )}
                </h1>
        
                <SliderComponent toAnimate = {toAnimate}/>
            </section>
        </VisibilitySensor>
    )
};

export default ClientsReviews;