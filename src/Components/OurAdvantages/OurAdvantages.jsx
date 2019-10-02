import React from 'react';

//data:
import AdvantagesData from './AdvantagesData';

//component:
import AdvantageItem from './AdvantageItem';

const OurAdvantages = () => (
    <section className = 'OurAdvantages'>
        {AdvantagesData.map( 
            (item, i) => 
                <AdvantageItem 
                    key = {i} 
                    item = {item} 
                    i = {i}
                />
        )}
    </section>
);

export default OurAdvantages;