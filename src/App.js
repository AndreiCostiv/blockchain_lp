//packages:
import React from 'react';

//styles:
import './css/main.css'

//components:
import {Info} from "./Components/ContextAPI/Info";
import Consumer from "./Components/ContextAPI/Info";
import ThemeTrigger from './Components/ThemeTrigger/ThemeTrigger';
import LightApp from './Components/LightApp/LightApp';
import DarkApp from './Components/DarkApp/DarkApp';

const App = () => {
    return(
        <Info>
            <ThemeTrigger/>
            
            <Consumer>
                { context => context.lightTheme ? <LightApp/> : <DarkApp/> }
            </Consumer>
        </Info>
    )
}

export default App;