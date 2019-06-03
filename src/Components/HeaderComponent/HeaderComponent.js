import React from 'react';
import HeaderComponentTitle from './HeaderComponentTitle'
import TryItButton from './TryItButton'


const HeaderComponent = (props) => (
    <section className = "HeaderComponent">
        <HeaderComponentTitle />

        <TryItButton scrollOnClick = {props.scrollOnClick}/>
    </section>
);

export default HeaderComponent;