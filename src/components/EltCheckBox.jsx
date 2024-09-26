import React from "react";

// EltCheckBox est un composant fonctionnel qui permet d'afficher une case à cocher
// on lui passe l'identifiant de l'élément, son état (coché ou non) et la fonction toggle
// qui permet de basculer l'état de l'élément (coché ou non) dans App.js en fonction de son id
// L'écriture checked ? A : B est un raccourci pour dire si checked est vrai on affiche A sinon on affiche B
function EltCheckBox({id, checked, toggle}) {
    return (
        <>
        {checked ? <input type="checkbox" defaultChecked onClick={()=>toggle(id)}></input> : <input type="checkbox" onClick={() => toggle(id)}></input>}
        </>
    );
}

export default EltCheckBox;
