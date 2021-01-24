//packages:
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//styles:
import './sass/main.sass'

//components:
import {Info} from './Components/ContextAPI/Info';
import Consumer from './Components/ContextAPI/Info';
import ThemeTrigger from './Components/ThemeTrigger/ThemeTrigger';
import LightApp from './Components/LightApp/LightApp';

const App = () => {
    return(
        <Router>
            <Route path = '/'>
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
            </Route>
        </Router>
    )
}

export default App;