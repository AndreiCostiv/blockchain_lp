import React from 'react';

// package
import GliderComponent from 'react-glider-carousel';

// custom hook
import useWindowSize from '../CustomHooks/useWindowSize'

// component
import GliderItem from './GliderItem';

// images (for demo)
// in real project data comes from server
import userAvatarA from '../../images/userAvatarA.png';
import userAvatarB from '../../images/userAvatarB.png';
import userAvatarC from '../../images/userAvatarC.png';

// in real project data comes from server
const SliderData = [
    {
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        clientPhoto: userAvatarA,
        clientName: 'Adam',
        clientJob: 'working as CEO'              
    },
    {
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        clientPhoto: userAvatarB,
        clientName: 'Elizabeth',
        clientJob: 'working as Web Designer'              
    },
    {
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        clientPhoto: userAvatarC,
        clientName: 'Igor',
        clientJob: 'working as cryptoinvestor'              
    },
    {
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        clientPhoto: userAvatarA,
        clientName: 'Adam',
        clientJob: 'working as CEO'              
    },
    {
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        clientPhoto: userAvatarB,
        clientName: 'Elizabeth',
        clientJob: 'working as Web Designer'              
    },
    {
        review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        clientPhoto: userAvatarC,
        clientName: 'Igor',
        clientJob: 'working as cryptoinvestor'              
    },
    
];

const SliderComponent = () => {
    const size = useWindowSize();

    return(
        <section>
            <GliderComponent
                hasDots = {false}
                settings={getGiderConfig(size)}
            >
                {
                    SliderData.map( 
                        (item, i) => 
                            <GliderItem 
                                key = {i}
                                review = {item.review}
                                clientPhoto = {item.clientPhoto}
                                clientName = {item.clientName}
                                clientJob = {item.clientJob}
                            />
                    )
                }
            </GliderComponent>
        </section>
    )
}

const getGiderConfig = ({width}) => (
    {
        slidesToShow: width <= 880? 1 : 3,
        slidesToScroll: 1,
        draggable: true,
        itemWidth: 300
    }
);

export default SliderComponent;