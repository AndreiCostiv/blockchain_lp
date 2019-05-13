import React from 'react'

const MiningPlanItem = (props) => (
    <section className="MiningPlanItem">
        <h2 className="MiningName">{props.name}</h2>
        <p className="MiningCurrencies">{props.currencyValue}  {props.currencyType}</p>

        <section className="HashRare">
            <h2 className="HashRareTitle">Hashrate</h2>
            <p className="HashRareValue">{props.hashRate}</p>
        </section>

        <h1 className="MiningPrice">{props.price} $</h1>
        <p className="MiningPricePerPeriod">{props.period} </p>

        <button className="BuyNow">Buy now</button>
    </section>
);

export default MiningPlanItem;