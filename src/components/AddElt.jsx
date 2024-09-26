import React from "react";
import { useState } from "react";

// AddElt est un composant fonctionnel qui permet d'ajouter un élément à la liste de courses
function AddElt({add}) {
    // Pour que l'utilisateur puisse saisir du texte, on utilise le hook useState car il faut que ce que tape
    // l'utilisateur soit stocké dans une variable d'état (item)
    let [item, setItem] = useState("");

    // Sur l'input on utilise l'évènement change pour mettre à jour la variable d'état item quand l'utilisateur modifie le texte
    // Sur le clic du bouton on appelle la fonction add avec le contenu de la variable d'état item
    // cette fonction add est définie dans App.js elle a été passée en propriété à Elt puis à AddElt
    return (
        <>
        <input type="text" name="item" value={item} onChange={(e) => setItem(e.target.value)}></input>
        <button onClick={() => add(item)}>Add</button>
        </>
    );
}

export default AddElt;
