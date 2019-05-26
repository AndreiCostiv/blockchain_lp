import React from 'react'
import Consumer from '../ContextAPI/Info'

const MiningPlanItem = (props) => (
    <Consumer>
        {
            context =>
                <section className = {context.lightTheme ? "MiningPlanItem" : "MiningPlanItem MiningPlanItemDark"}>
                    <h2 className="MiningName">{props.name}</h2>

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

                    <section className="HashRare">
                        <h2 className="HashRareTitle">Hashrate</h2>
                        <p className="HashRareValue">{props.hashRate}</p>
                    </section>

                    <h1 className="MiningPrice">{props.price} $</h1>
                    <p className="MiningPricePerPeriod">{props.period} </p>

                    <button className =  {context.lightTheme ? "BuyNow" : "BuyNow BuyNowDark"}>Buy now</button>
                </section>
        }
    </Consumer>
);
export default MiningPlanItem;