import React, {Component} from 'react';

export const {Consumer, Provider} = React.createContext();

class Info extends Component{
    state = {
        number: 10
    };

    render() {
        return (
            <Provider value = {{state: this.state}}>
                {this.props.children}
            </Provider>
        );
    }
}

export {Info};
export default Consumer;