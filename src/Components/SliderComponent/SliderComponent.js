import React, { Fragment } from 'react';

// package
import { Glide } from 'react-glide';
import 'react-glide/lib/reactGlide.css';

// custom hook
import useWindowSize from '../CustomHooks/useWindowSize'

// images (for demo)
import userAvatarA from '../../images/userAvatarA.png';
import userAvatarB from '../../images/userAvatarB.png';
import userAvatarC from '../../images/userAvatarC.png';

const SliderComponent = () => {
    const size = useWindowSize();

    return(
        <section>
            <Glide
                width={size.width}
                height={400}
                autoPlay={true}
                autoPlaySpeed={2000}
                dots = {false}
                infinite={true}
                onSlideChange={() => console.log("slide changed")}
            >
                <img src = {userAvatarA} alt="image1" />
                <img src = {userAvatarB} alt="image2" />
                <img src = {userAvatarC} alt="image3" />
            </Glide>
        </section>
    )
}

export default SliderComponent;