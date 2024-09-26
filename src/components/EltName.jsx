import React from "react";
import "./EltName.css";

function EltName({name, checked}) {
    return (
        <>
            {checked ? <span>{name}</span> : <span className="notChecked">{name}</span>}
        </>
    );
}

export default EltName;
