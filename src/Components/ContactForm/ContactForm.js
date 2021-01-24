import React from 'react';

//package:
import VisibilitySensor from 'react-visibility-sensor';

// components:
import FormTextContent from './FormTextContent';
import FormForUser from './FormForUser';

const ContactForm = () => {
    return(
        <VisibilitySensor partialVisibility = {true}>
            { 
                ({isVisible}) => (
                    <section className = 'ContactForm'>
                            <FormTextContent isVisible = {isVisible}/>
                            <FormForUser isVisible = {isVisible}/>
                    </section>
                )
            }
        </VisibilitySensor>
    )
};

export default ContactForm;