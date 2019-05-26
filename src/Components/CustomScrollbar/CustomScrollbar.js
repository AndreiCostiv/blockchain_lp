import React, {Component} from 'react'

import SpringScrollbars from 'react-custom-scrollbars';

import ThemeTrigger from "../HeaderComponent/ThemeTrigger/ThemeTrigger";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import OurAdvantages from "../OurAdvantages/OurAdvantages";
import HowItWorks from "../HowItWorks/HowItWorks";
import MiningPlan from "../MiningPlan/MiningPlan";
import ContactForm from "../ContactForm/ContactForm";

class LightComponents extends Component {
    state = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    updateCustomScrollbar = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    };

    componentDidMount(){
        window.addEventListener('resize', this.updateCustomScrollbar)
    };

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateCustomScrollbar)
    };

    render() {
        return (
            <SpringScrollbars
                universal
                autoHide
                style = {{
                    height: this.state.height,
                    width: this.state.width
                }}            >
                <section className="app">

                    <ThemeTrigger />

                    <HeaderComponent />

                    <OurAdvantages/>

                    <HowItWorks/>

                    <MiningPlan/>

                    {/*<ClientsReviews />*/}

                    <ContactForm/>
                </section>
            </SpringScrollbars>
        );
    }
}

class DarkComponents extends Component {
    render() {
        return (
            <SpringScrollbars
                universal
                autoHide
                style = {{
                    height: this.state.height,
                    width: this.state.width
                }}
            >
                <section className = 'appDarkTheme'>
                    <ThemeTrigger />

                    <HeaderComponent/>

                    <OurAdvantages/>

                    <HowItWorks/>

                    <MiningPlan/>

                    {/*<ClientsReviews />*/}

                    <ContactForm/>
                </section>
            </SpringScrollbars>
        );
    }
}

export default LightComponents;
export { DarkComponents };
