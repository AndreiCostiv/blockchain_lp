//packages:
import React, { Component } from 'react';

//styles:
import './css/main.css'

//components:
import LightApp from './Components/LightApp/LightApp'
import DarkApp from './Components/DarkApp/DarkApp'
import {Info} from "./Components/ContextAPI/Info";

class App extends Component{
    render() {
        return(
            <Info>
                <LightApp />
                
                <DarkApp />
            </Info>
        );
    }
}

export default App;