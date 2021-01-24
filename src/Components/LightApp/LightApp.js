import React, { Fragment } from 'react';

//Components
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import OurAdvantages from "../OurAdvantages/OurAdvantages";
import HowItWorks from "../HowItWorks/HowItWorks";
// import MiningPlan from "../MiningPlan/MiningPlan";
import ClientsReviews from "../ClientsReviews/ClientsReviews"
import ContactForm from "../ContactForm/ContactForm";

const LightApp = ({lightTheme}) => {  
    return (
        <Fragment>
            <HeaderComponent />

            <section className = {lightTheme ? 'app' : 'appDarkTheme'}>

                <OurAdvantages/>

                <HowItWorks/>

                {/* <MiningPlan/> */}

                <ClientsReviews />

                <ContactForm/>
            </section>
        </Fragment>
    );
};

export default LightApp;