import React, { Component } from 'react';

import ClientReviewItem from './ClientReviewItem'

class ClientReviews extends Component {
    render() {


        return(
            <section className = "ClientReviews">
                <h1 className="ClientReviewsHeader">Our client reviews</h1>

                <ClientReviewItem />
            </section>
        )
    }
}

export default ClientReviews;