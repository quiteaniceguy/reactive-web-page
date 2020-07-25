import React from 'react';

import './icons_component.css';

function Icons(props){
    let horzStyle = "horizontalTripleDisplay";
    let vertStyle = "verticalTripleDisplay";
    let styleClassName = props.vertical === "true" ? vertStyle : horzStyle;

    return (
        <div className = "boxed_element">
            <div className={styleClassName}>
                <i className="fa fa-cloud"></i>
                <p> icon #3</p>
            </div>

            <div className={styleClassName}>
                <i className="fa fa-file"></i>
                <p> icon #2</p>
            </div>

            <div className={styleClassName}>
                <i className="fa fa-bars"></i>
                <p> icon #1</p>
            </div>

        </div>
    );
}

export default Icons;


