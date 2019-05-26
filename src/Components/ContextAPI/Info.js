import React, {Component} from 'react';

export const {Consumer, Provider} = React.createContext();

class Info extends Component{
    state = {
        lightTheme: true,
        miningPlanData: [
            {
                name: 'Bronze',
                currencyValue: 3,
                currencyType: 'cryptocurrencies mining',
                hashRate: '500 GH/s',
                price: "49.00",
                period: "per week"
            },
            {
                name: 'Silver',
                currencyValue: 5,
                currencyType: 'cryptocurrencies mining',
                hashRate: '6.9 TH/s',
                price: "99.00",
                period: "per month"
            },
            {
                name: 'Gold',
                currencyValue: 10,
                currencyType: 'cryptocurrencies mining',
                hashRate: '13 TH/s',
                price: "1999.00",
                period: "per month"
            }
        ],
        TryItClicked: false
    };

    ScrollbarController = () => {
        this.setState({
            TryItClicked: !this.state.TryItClicked
        });
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
                    miningPlanData: this.state.miningPlanData,
                    ScrollbarController: this.ScrollbarController,
                    TriggerMethod: this.TriggerMethod,
                    TryItClicked: this.state.TryItClicked
                }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {Info};
export default Consumer;