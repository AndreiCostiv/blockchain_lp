import React from 'react';

import Arrow from '../../images/icons/Arrow.svg'

const TryItButton = (props) => (
    <section className = "TryItButton" onClick = {props.scrollOnClick}>
        <h2 className = "TryItButtonText"> Try this now </h2>
        <img className = "TryItButtonImg" src = {Arrow} alt=">"/>
    </section>
);

export default TryItButton;