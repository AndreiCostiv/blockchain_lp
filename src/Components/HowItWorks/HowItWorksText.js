import React, {Component} from 'react';
import {Spring, Transition} from 'react-spring/renderprops';
import Consumer from '../ContextAPI/Info';
import HowItWorks from './HowItWorks';

const Paragraph =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.`;

class HowItWorksText extends Component{

    render() {
        return (
            <Consumer>
                {
                    context => {
                        if (context.ScrollbarPosition >= 400) {
                            return (
                                <section className = "HowItWorksText">
                                    <HowItWorksTitle status = 'show' />

                                    <HowItWorksParagraph status = 'show'/>
                                </section>
                            )
                        }
                        else {
                            return (
                                <section className = "HowItWorksText" >
                                    <HowItWorksTitle status ='hide' />

                                    <HowItWorksParagraph status = 'hide'/>
                                </section>
                            )
                        }
                    }
                }
            </Consumer>
        );
    }
}

const HowItWorksTitle = (props) => (
    props.status === 'show' ?
        <Spring
            config = {{duration: 1000}}
            from = {{opacity: 0}}
            to = {{opacity: 1}}
        >
            {
                props => <h1 className="HowItWorksTitle" style = {props} >HOW IT WORKS?</h1>
            }
        </Spring>
        :
        <Spring
            config = {{duration: 1000}}
            to = {{opacity: 0}}
        >
            {
                props => <h1 className="HowItWorksTitle" style={props}>HOW IT WORKS?</h1>
            }
        </Spring>
);

const HowItWorksParagraph = (props) => (
    props.status === 'show' ?
        <p className = "HowItWorksParagraph">
            {Paragraph}          
        </p>   
        :
        <p className="HowItWorksParagraph">
            {Paragraph}
        </p>
);


export default HowItWorksText;