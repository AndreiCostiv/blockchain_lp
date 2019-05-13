import React from 'react';

import Consumer from "../../ContextAPI/Info";

const  ThemeTrigger  = () => {
        return (
            <Consumer>
                {
                    value =>
                        value.lightTheme ?
                            <TriggerBox
                                Theme = {LightTheme}
                                TriggerMethod = {value.TriggerMethod}
                            />
                            :
                            <TriggerBox
                                Theme = {DarkTheme}
                                TriggerMethod = {value.TriggerMethod}
                            />
                }
            </Consumer>
        );
};


const TriggerBox = (props) => (
    <section className = "ThemeTrigger">
        <section className="TriggerCircle" style = {props.Theme} onClick = {props.TriggerMethod}> </section>
    </section>
);

const
    LightTheme = {
        background: 'rgba(0, 194, 255, 0.75)'
    },
    DarkTheme = {
        background: 'rgba(92, 92, 92, 0.75)'
    };

export default ThemeTrigger;