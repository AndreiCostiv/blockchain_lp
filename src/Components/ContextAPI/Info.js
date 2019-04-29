import React, {Component} from 'react';

export const {Consumer, Provider} = React.createContext();

class Info extends Component{
    state = {
        lightTheme: true
    };

    TriggerMethod = () =>{
        this.setState({
            lightTheme: !this.state.lightTheme
        });
    };

    render() {
        return (
            <Provider
                value = {{
                    lightTheme: this.state.lightTheme,
                    TriggerMethod: this.TriggerMethod
                }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {Info};
export default Consumer;