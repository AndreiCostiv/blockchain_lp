import React from 'react';

import Arrow from '../../images/icons/Arrow.svg'

import Consumer from '../ContextAPI/Info'

const TryItButton = () => (
    <Consumer>
        {
            context => (
                <TryItButtonBox ScrollbarController = { context.ScrollbarController }/>
            )
        }
    </Consumer>
);

const TryItButtonBox = (props) => (
    <section className = "TryItButton" onClick = {props.ScrollbarController}>
        <h2 className = "TryItButtonText"> Try this now </h2>
        <img className = "TryItButtonImg" src = {Arrow} alt=">"/>
    </section>
);

export default TryItButton;