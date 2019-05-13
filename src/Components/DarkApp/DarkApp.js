import React from 'react';

import HeaderComponent from '../HeaderComponent/HeaderComponent.js';
import OurAdvantages from '../OurAdvantages/OurAdvantages.js';
import HowItWorks from '../HowItWorks/HowItWorks.js';
import MiningPlan from '../MiningPlan/MiningPlan.js';
// import ClientsReviews from './Components/ClientsReviews/ClientsReviews.js';
import ContactForm from '../ContactForm/ContactForm.js';


const DarkApp = () => {
    return(
        <React.Fragment>
            <HeaderComponent test = "dark mode"/>

            <OurAdvantages/>

            <HowItWorks/>

            <MiningPlan/>

            {/*<ClientsReviews />*/}

            <ContactForm/>
        </React.Fragment>
    )
};

export default DarkApp;