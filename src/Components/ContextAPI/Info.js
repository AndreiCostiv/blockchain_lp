import React, {Component} from 'react';
export const {Consumer, Provider} = React.createContext();

class Info extends Component{
    state = {
        lightTheme: true,
        ScrollbarPosition: false,
        TryItClicked: false,

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
        ]
    };

    TriggerMethod = () =>{
        console.log('clicked')

        this.setState({
            lightTheme: !this.state.lightTheme
        });
    };

    ChangeTryItClicked = () => {
        this.setState({
            TryItClicked: !this.state.TryItClicked
        })
    };

    render() {
        return (
            <Provider
                value = {{
                    lightTheme: this.state.lightTheme,
                    miningPlanData: this.state.miningPlanData,
                    TryItClicked: this.state.TryItClicked,
                    ScrollbarPosition: this.state.ScrollbarPosition,
                    TriggerMethod: this.TriggerMethod,
                    ChangeTryItClicked: this.ChangeTryItClicked,
                }}>
                {this.props.children}
            </Provider>
        );
    }
}

export {Info};
export default Consumer;