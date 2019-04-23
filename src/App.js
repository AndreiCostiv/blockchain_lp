import React, { Component } from 'react';

//styles:
import './css/main.css'

//Components
import {Info} from './Components/ContextAPI/Info';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent.js';
import OurAdvantages from './Components/OurAdvantages/OurAdvantages.js';
import HowItWorks from './Components/HowItWorks/HowItWorks.js';
import MiningPlan from './Components/MiningPlan/MiningPlan.js';
import ClientsReviews from './Components/ClientsReviews/ClientsReviews.js';
import ContactForm from './Components/ContactForm/ContactForm.js';

class App extends Component {
    render() {
        return (
            <Info>
                <section className="app">
                    <HeaderComponent />

                    <OurAdvantages />

                    <HowItWorks />

                    <MiningPlan />

                    <ClientsReviews />

                    <ContactForm />
                </section>
            </Info>
    )
  }
}

export default App;
