//packages:
import React, {Fragment} from 'react';

//styles:
import './css/main.css'

//components:
import {Info} from './Components/ContextAPI/Info';
import Consumer from './Components/ContextAPI/Info';
import ThemeTrigger from './Components/ThemeTrigger/ThemeTrigger';
import LightApp from './Components/LightApp/LightApp';

const App = () => {
    return(
        
            <Info>
                <Fragment>        
                    <ThemeTrigger/>
                                    
                    <Consumer>
                        { context => 
                            <LightApp 
                                lightTheme = {context.lightTheme}
                            />
                        }
                    </Consumer>
                </Fragment>                
            </Info>
    )
}

export default App;