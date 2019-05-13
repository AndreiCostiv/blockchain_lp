import React, { Component } from 'react';

//styles:
import './css/main.css'

//Components
import CustomScrollbar from './Components/CustomScrollbar/CustomScrollbar';
import {Info} from './Components/ContextAPI/Info';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent.js';
import GeneralBackground from './Components/GeneralBackgroundComponent/GeneralBackground.js';
import OurAdvantages from './Components/OurAdvantages/OurAdvantages.js';
import HowItWorks from './Components/HowItWorks/HowItWorks.js';
import MiningPlan from './Components/MiningPlan/MiningPlan.js';
import ClientsReviews from './Components/ClientsReviews/ClientsReviews.js';
import ContactForm from './Components/ContactForm/ContactForm.js';

class App extends Component {
    render() {
        return (
            <Info>
               <CustomScrollbar>
                   <section className="app">
                       <HeaderComponent/>

                       <GeneralBackground>
                           <OurAdvantages/>

                           <HowItWorks/>

                           <MiningPlan/>

                           {/*<ClientsReviews />*/}

                           <ContactForm/>
                       </GeneralBackground>
                   </section>
               </CustomScrollbar>
            </Info>
        );
    }
}

export default App;
