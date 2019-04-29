import React, { Component } from 'react';

import ThemeTrigger from './ThemeTrigger/ThemeTrigger.js'
import HeaderComponentTitle from './HeaderComponentTitle'
import TryItButton from './TryItButton'

class HeaderComponent extends Component {
    render() {
        return(
            <div className = "HeaderComponent">
                <ThemeTrigger />
                <HeaderComponentTitle />
                <TryItButton />
            </div>
        )
    }
}

export default HeaderComponent;