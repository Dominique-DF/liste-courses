import React from "react";

function EltTrash({id, del}) {
    return (
        <button onClick={()=>del(id)}>🗑️</button>
    );
}

export default EltTrash;
