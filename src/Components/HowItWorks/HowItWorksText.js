import React, {Component} from 'react';

const Paragraph =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.`;

class HowItWorksText extends Component{

    render() {
        return (
            <section className = "HowItWorksText">
                <HowItWorksTitle />

                <HowItWorksParagraph />
            </section>
        );
    }
}

const HowItWorksTitle = () => (
     <h1 className="HowItWorksTitle" >HOW IT WORKS?</h1>
);

const HowItWorksParagraph = () => (
    <p className = "HowItWorksParagraph">
        {Paragraph}          
    </p>
);


export default HowItWorksText;