import React from 'react'

const GliderItem = ({review, clientPhoto, clientName, clientJob}) => (
    <section>
        <span className = 'clientReview'>{review}</span>

        <section className = 'clientProfile'>
            <img className = 'clientPhoto' src = {clientPhoto} alt = 'img'/> 

            <section className = 'clientTitle'>
                <h3 className = 'clientName'>{clientName}</h3>
                <span className = 'clientJob'>{clientJob}</span>
            </section>
        </section>
    </section>
);

export default GliderItem;
