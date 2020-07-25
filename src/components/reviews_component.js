import React from 'react';

import './reviews_component.css';

export function Reviews(props){
    let horzStyle = "horizontalTripleDisplay";
    let vertStyle = "verticalTripleDisplay";
    let styleClassName = props.vertical === "true" ? vertStyle : horzStyle;

    return (
        <div className = "boxed_element">
            <div className={styleClassName}>
                <br/>
                <img className="circle_img"src="./images/testimonials-1.jpg" alt="" style={{width: "200px"}}/>
                <p> This person loves our thing </p>
            </div>
            <div className={styleClassName}>
                <br/>
                <img className="circle_img" src="./images/testimonials-2.jpg" alt="" style={{width: "200px"}}/>
                <p> This person  also loves our thing </p>


            </div>
            <div className={styleClassName}>
                <br/>
                <img className="circle_img" src="./images/testimonials-3.jpg" alt="" style={{width: "200px"}}/>
                <p> This person loves our thing too!</p>
            </div>
        </div>
    );
}

export default Reviews;
