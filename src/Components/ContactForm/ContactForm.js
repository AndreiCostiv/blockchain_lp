import React from 'react';

const ContactForm = () => (
    <section className="ContactForm">
        <FormTextContent />
        <FormForUser />
    </section>
);

const FormTextContent = () => (
    <React.Fragment >
        <h2 className="ContactFormHeader">Still have some questions?</h2>
        <p className="ContactFormTitle">Leave us your number and we will call you</p>
    </React.Fragment>
);

const FormForUser = () => (
    <form className = "AwesomeFormBox">
        <input type = "tel" className = "AwesomeFormInput" defaultValue = "+380 "/>
        <button type = "submit" className="AwesomeFormButton"> </button>
    </form>
);

export default ContactForm;