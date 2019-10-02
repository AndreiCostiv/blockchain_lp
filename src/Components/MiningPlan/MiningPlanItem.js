import React from 'react';

//context:
import Consumer from '../ContextAPI/Info';

const MiningPlanItem = (props) => (
    <Consumer>
        {
            context =>
                <section className = {context.lightTheme ? "MiningPlanItem" : "MiningPlanItem MiningPlanItemDark"}>
                    <h3 className="MiningName">{props.name}</h3>

                    {
                        props.currencyValue < 5 &&
                        <p className="MiningCurrencies ">
                            <span className="redCurrencyValue">
                                {props.currencyValue}
                            </span>

                            {props.currencyType}
                        </p>
                    }
                    {
                        props.currencyValue >= 5 && props.currencyValue < 10 &&
                        <p className="MiningCurrencies">
                            <span className="orangeCurrencyValue">
                                {props.currencyValue}
                            </span>

                            {props.currencyType}
                        </p>
                    }
                    {
                        props.currencyValue >= 10 && props.currencyValue >= 5 &&
                        <p className="MiningCurrencies">
                            <span className="greenCurrencyValue">
                                {props.currencyValue}
                            </span>

                            {props.currencyType}
                        </p>
                    }

                    <section className="HashRate">
                        <h4 className="HashRateTitle">Hashrate</h4>
                        <p className="HashRateValue">{props.hashRate}</p>
                    </section>

                    <h4 className="MiningPrice">{props.price} $</h4>
                    <p className="MiningPricePerPeriod">{props.period} </p>

                    <button className =  {context.lightTheme ? "BuyNow" : "BuyNow BuyNowDark"}>Buy now</button>
                </section>
        }
    </Consumer>
);
export default MiningPlanItem;