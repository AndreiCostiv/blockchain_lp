//packages:
import React, { Component } from 'react';
import Consumer, {Info} from './Components/ContextAPI/Info';

//styles:
import './css/main.css'
import LightApp from "./Components/LightApp/LightApp";
import DarkApp  from "./Components/DarkApp/DarkApp";
import Scrollbars from "react-custom-scrollbars";

class App extends Component{
    constructor(props) {
        super(props);

        this.CustomScrollbar = React.createRef()
    }
    
    state = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    updateCustomScrollbar = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    };

    componentDidMount(){
        window.addEventListener('resize', this.updateCustomScrollbar)
    };

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateCustomScrollbar)
    };

    GetScrollHeight = () => (this.CustomScrollbar.current.getScrollHeight());

    scrollOnClick = () => {
        this.CustomScrollbar.current.view.scroll({
            top: this.GetScrollHeight(),
            left: 0,
            behavior: 'smooth'
        });
    };

    render() {
        return(
            <Info>
                <Consumer>
                    {
                        context => (
                            <Scrollbars
                                universal
                                autoHide
                                ref = {this.CustomScrollbar}
                                style = {{
                                    height: this.state.height,
                                    width: this.state.width
                                }}
                            >
                                {
                                    context.lightTheme ?
                                        <LightApp scrollOnClick = {this.scrollOnClick}/>
                                        :
                                        <DarkApp scrollOnClick = {this.scrollOnClick}/>
                                }
                            </Scrollbars>
                        )
                    }
                </Consumer>
            </Info>
        );
    }
}

export default App;