import React from 'react';
import "./BackDrop.scss";
const BackDrop = (props) => {
    return (
        <div className="backdrop" onClick={props.close} />
    );
}

export default BackDrop;
