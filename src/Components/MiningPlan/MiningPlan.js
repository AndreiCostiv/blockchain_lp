import React from 'react';

//context:
import Consumer from '../ContextAPI/Info'

//component:
import MiningPlanItem from './MiningPlanItem'

const MiningPlan = () => {
    return (
        <Consumer>
            {
                value =>
                    <React.Fragment>
                        <h2 className="MiningPlanComponentHeader">Choose your mining plan</h2>

                        <section className="MiningPlan">
                            {
                                value.miningPlanData.map((item, i) => (
                                    <MiningPlanItem
                                        key = {i}
                                        i = {i}
                                        name = {item.name}
                                        lightTheme   = {value.lightTheme}
                                        currencyValue = {item.currencyValue}
                                        currencyType = {item.currencyType}
                                        hashRate = {item.hashRate}
                                        price = {item.price}
                                        period = {item.period}
                                    />
                                ))
                            }
                        </section>
                    </React.Fragment>   
            }
        </Consumer>
    );
};

export default MiningPlan;