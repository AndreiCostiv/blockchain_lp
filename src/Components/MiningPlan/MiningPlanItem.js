import React, {useState} from 'react';

//packages:
import VisibilitySensor from 'react-visibility-sensor';
import {useSpring, animated} from 'react-spring';

const MiningPlanItem = (props) => {
    const {lightTheme, name, currencyValue, currencyType, hashRate, price, period, i} = props;

    const [toAnimate, setToAnimate] = useState(false);

    const IsItVisible = (isVisible) => 
        isVisible === undefined ? setToAnimate(false) : setToAnimate(isVisible) 
    
    //sorting currency to their classes:
    const getClassForCurrencyValue = (value) => {
        if(value >= 0 && value < 5) {
            return 'redCurrencyValue'
        }
        else if(value >= 5 && value < 10) {
            return 'orangeCurrencyValue'
        }
        else if(value >= 10) {
            return 'greenCurrencyValue'
        }
        else {
            return 'redCurrencyValue'
        }
    };

    //animation config:
    const springConf = useSpring({
        from: {opacity: toAnimate ? 0 : 1},
        to: {opacity: toAnimate ? 1 : 0},
        config: {duration: 250},
        delay: toAnimate ? (i * 200) : 0 
    });

    return(
        <VisibilitySensor partialVisibility = {true} onChange = {IsItVisible}>
            <animated.section style = {springConf} 
                className = {
                    lightTheme ? "MiningPlanItem" : "MiningPlanItem MiningPlanItemDark"
                }
            >
                <h3 className="MiningName">{name}</h3>
                
                {<p className="MiningCurrencies ">
                    <span className = {getClassForCurrencyValue(currencyValue)}>
                        {currencyValue}
                    </span>
        
                    {currencyType}
                </p>}
                    
                <section className="HashRate">
                    <h4 className="HashRateTitle">Hashrate</h4>
                    <p className="HashRateValue">{hashRate}</p>
                </section>
                    
                <h4 className="MiningPrice">{price} $</h4>
                <p className="MiningPricePerPeriod">{period} </p>
        
                <button className =  {lightTheme ? "BuyNow" : "BuyNow BuyNowDark"}>Buy now</button>
            </animated.section>
        </VisibilitySensor>
    );
};

export default MiningPlanItem;