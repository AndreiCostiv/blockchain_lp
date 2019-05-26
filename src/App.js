//packages:
import React from 'react';
import Consumer, {Info} from './Components/ContextAPI/Info';

//styles:
import './css/main.css'
import LightComponents from "./Components/CustomScrollbar/CustomScrollbar";
import { DarkComponents } from "./Components/CustomScrollbar/CustomScrollbar";

const App = () => {
    return(
        <Info>
                <Consumer>
                    {
                        context => (
                            context.lightTheme ? <LightComponents /> : <DarkComponents />
                        )
                    }
                </Consumer>
        </Info>
    )
};

export default App;