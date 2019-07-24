import React, { Component } from 'react';
import Scrollbars from "react-custom-scrollbars";
import LightApp from "../LightApp/LightApp";
import DarkApp from "../DarkApp/DarkApp";
import Consumer from "../ContextAPI/Info";

export default class CustomScrollbar extends Component {
    constructor(props) {
        super(props);

        this.CustomScrollbar = React.createRef()
    }

    state = {
        width: window.innerWidth,
        height: window.innerHeight,
        position: undefined
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

    GetScrollHeight = () => this.CustomScrollbar.current.getScrollHeight();

    GetScrollPosition = () => this.CustomScrollbar.current.getScrollTop();

    scrollOnClick = () => (
        this.CustomScrollbar.current.view.scroll({
            top: this.GetScrollHeight(),
            left: 0,
            behavior: 'smooth'
        })
    );

    ScrollbarPositionTracker = () => (
        this.setState({
            position: this.GetScrollPosition()
        })
    );

    render() {
        return (
            <Consumer>
                {
                    context => {
                        context.ScrollbarPosition = this.state.position;

                        return (
                            <Scrollbars
                                universal
                                autoHide
                                onScroll = {this.ScrollbarPositionTracker}
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
                }
            </Consumer>
        );
    }
};