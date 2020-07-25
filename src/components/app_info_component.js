import React from 'react';

import './app_info_component.css';

function AppInfo(props){
    let horzStyle = "horizontalSquareDisplay";
    let vertStyle = "verticalSquareDisplay";
    let styleClassName = props.vertical === "true" ? vertStyle : horzStyle;
    return (
        <div className = "boxed_element">
            <div className={styleClassName}>
                <h1> square display </h1>
                <p> My cool icon! </p>
            </div>
            <div className={styleClassName}>
                <img className="showcase_img" src="./images/showcase-1.jpg" alt="" />
            </div>
            <div className={styleClassName}>
                <img className="showcase_img" src="./images/showcase-2.jpg" alt="" />
            </div>
            <div className={styleClassName}>
                <h1> square display </h1>
                <p> another very cool square display </p>
            </div>
        </div>
    )
}

export default AppInfo;

