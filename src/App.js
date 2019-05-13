import React from 'react';

//styles:
import './css/main.css'

//Components
import CustomScrollbar from './Components/CustomScrollbar/CustomScrollbar';
import Consumer, {Info} from './Components/ContextAPI/Info';
import LightApp from './Components/LightApp/LightApp'
import DarkApp from './Components/DarkApp/DarkApp'

import ThemeTrigger from './Components/HeaderComponent/ThemeTrigger/ThemeTrigger.js'

const App = () => {
    return(
        <Info>
            <CustomScrollbar>
                <ThemeTrigger />

                <Consumer>
                    {
                        context =>
                            context.lightTheme ?
                                <LightApp/>
                                :
                                <DarkApp />
                    }
                </Consumer>
            </CustomScrollbar>
        </Info>
    )
};

export default App;