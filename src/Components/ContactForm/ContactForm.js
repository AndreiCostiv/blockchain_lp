import React, {useState} from 'react';

//package:
import VisibilitySensor from 'react-visibility-sensor';

// components:
import FormTextContent from './FormTextContent';
import FormForUser from './FormForUser';

const ContactForm = () => {
    const [toAnimate, setToAnimate] = useState(false);

    const IsItVisible = (isVisible) => 
        isVisible === undefined ? setToAnimate(false) : setToAnimate(isVisible)  

    return(
        <VisibilitySensor onChange = {IsItVisible} partialVisibility = {true}>
            <section className = 'ContactForm'>
                <FormTextContent toAnimate = {toAnimate}/>
                <FormForUser toAnimate = {toAnimate}/>
            </section>
        </VisibilitySensor>
    )
};

export default ContactForm;