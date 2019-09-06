import React, { Fragment } from 'react'

import HeaderComponent from "../HeaderComponent/HeaderComponent";
import OurAdvantages from "../OurAdvantages/OurAdvantages";
import HowItWorks from "../HowItWorks/HowItWorks";
import MiningPlan from "../MiningPlan/MiningPlan";
import ContactForm from "../ContactForm/ContactForm";

const LightApp = () => {
    return (
        <Fragment>
            <HeaderComponent />

            <section className="app">

                <OurAdvantages/>

                <HowItWorks/>

                <MiningPlan/>

                {/*<ClientsReviews />*/}

                <ContactForm/>
            </section>
        </Fragment>
    );
};

export default LightApp;