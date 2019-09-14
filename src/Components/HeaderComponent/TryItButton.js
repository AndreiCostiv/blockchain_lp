import React from 'react';

//image:
import Arrow from '../../images/icons/Arrow.svg'

//context
import Consumer from '../ContextAPI/Info'

const TryItButton = () => (
    <Consumer>
        {context => (
            <section className = "TryItButton">
                <h2 onClick = {context.ChangeTryItClicked} className = "TryItButtonText"> Try this now </h2>
                <img className = "TryItButtonImg" src = {Arrow} alt=">"/>
            </section>
        )}
    </Consumer>
);

export default TryItButton;