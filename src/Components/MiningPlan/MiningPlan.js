import React from 'react';
import Consumer from '../ContextAPI/Info'
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
                                        key={i}
                                        name={item.name}
                                        currencyValue={item.currencyValue}
                                        currencyType={item.currencyType}
                                        hashRate={item.hashRate}
                                        price={item.price}
                                        period={item.period}
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