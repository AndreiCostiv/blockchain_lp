import React, {Component} from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbar extends Component{
    state = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    render() {
        return (
            <Scrollbars
                universal
                autoHide
                style = {{
                    height: this.state.height,
                    width: this.state.width
                }}
            >
                {this.props.children}
            </Scrollbars>
        );
    }
}

export default CustomScrollbar;