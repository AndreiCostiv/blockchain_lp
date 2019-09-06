import React, { Component } from 'react';

import SliderComponent from '../SliderComponent/SliderComponent'

const ClientsReviews = () => {
    return(
        <section className = "ClientReviews">
            <h1 className="ClientReviewsHeader">Our client reviews</h1>
            <SliderComponent/>
        </section>
    )
}

export default ClientsReviews;