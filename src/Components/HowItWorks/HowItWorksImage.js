import React from 'react'

import Consumer from '../ContextAPI/Info'
import ArticleIMG from '../../images/ArticleIMG.png';

const HowItWorksImage = () => (
    <section className = "HowItWorksImageBox">
        <Consumer>
            {
                context =>
                    context.lightTheme ?
                        <img className = "HowItWorksImage" src = {ArticleIMG} alt = " "/>
                        :
                        <img className = "HowItWorksImageDark" src = {ArticleIMG} alt = " "/>

            }
        </Consumer>
    </section>
);

export default HowItWorksImage;