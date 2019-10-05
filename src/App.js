//packages:
import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//styles:
import './css/main.css'

//components:
import {Info} from './Components/ContextAPI/Info';
import Consumer from './Components/ContextAPI/Info';
import ThemeTrigger from './Components/ThemeTrigger/ThemeTrigger';
import LightApp from './Components/LightApp/LightApp';

const App = () => {
    return(
        <Router>
            <Info>
                <Switch>
                    <Route path = '/' render = { () => (
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
                    ) }/>
                </Switch>                
            </Info>
        </Router>  
    )
}

export default App;