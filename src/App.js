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
import DarkApp from './Components/DarkApp/DarkApp';
import ClientsReviews from './Components/ClientsReviews/ClientsReviews';

const App = () => {
    return(
        <Router>
            <Info>
                <Switch>
                    <Route exact path = '/' render = { () => (
                        <Fragment>        
                            <ThemeTrigger/>
                                    
                            <Consumer>
                                { context => context.lightTheme ? <LightApp/> : <DarkApp/> }
                            </Consumer>
                        </Fragment>
                    ) }/>
                </Switch>                

            </Info>
        </Router>  
    )
}

export default App;