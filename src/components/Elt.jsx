import React from "react";
import EltCheckBox from "./EltCheckBox";
import EltName from "./EltName";
import EltTrash from "./EltTrash";

function Elt({id, name, checked, toggle, del}) {
    return (
        <div>
            <EltCheckBox key={id} checked={checked} id={id} toggle={toggle} />
            <EltName name={name} checked={checked}/>
            <EltTrash id={id} del={del}/>
        </div>
    );
}

export default Elt;
