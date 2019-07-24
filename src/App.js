//packages:
import React, { Component } from 'react';

//styles:
import './css/main.css'

//components:
import CustomScrollbar from "./Components/CustomScrollbar/CustomScrollbar";
import {Info} from "./Components/ContextAPI/Info";

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
                <CustomScrollbar />
            </Info>
        );
    }
}

export default App;