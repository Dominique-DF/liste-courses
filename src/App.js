import './App.css';
import React from 'react';
import Header from './components/Header';
import Elt from './components/Elt';
import AddElt from './components/AddElt';
import { useState } from 'react';

function App() {

  // On utilise le hook useState pour déclarer une variable d'état shoppingList
  // On initialise cette variable avec un tableau d'objets
  // Chaque objet représente un élément de la liste de courses
  // Chaque objet a trois propriétés : id, name et checked
  // setShoppingList est une fonction qui permet de modifier la variable d'état shoppingList
  const [shoppingList, setShoppingList] = useState([
    { id: 1, name: "Oeufs", checked: true },
    { id: 2, name: "Lait", checked: true },
    { id: 3, name: "Beurre", checked: false },
  ]);

  // La fonction toggle permet de basculer l'état de la propriété checked d'un élément de la liste de courses
  // Elle prend en paramètre l'identifiant de l'élément à modifier
  // si l'élément est coché, il devient décoché et vice versa
  function toggle(id) {
    // la méthode map permet de parcourir le tableau shoppingList (un peu à la façon d'une boucle foreach)
    // shoppingList est imutable, on ne peut pas le modifier directement du coup on crée un nouveau tableau avec les modifications
    let newShoppingList = shoppingList.map((elt) => {
      if (elt.id === id) {
        elt.checked = !elt.checked;
      }
      return elt;
    });
    // on met à jour la variable d'état shoppingList avec le nouveau tableau
    setShoppingList(newShoppingList);
  }

  // La fonction del permet de supprimer un élément de la liste de courses
  // On procède de la même manière que pour la fonction toggle en créant un nouveau tableau avec tous les éléments sauf celui à supprimer
  function del(id) {
    let newShoppingList = shoppingList.filter((elt) => elt.id !== id);
    setShoppingList(newShoppingList);
  }

  // La fonction add permet d'ajouter un élément à la liste de courses
  // On crée un nouvel objet avec un identifiant unique (l'identifiant est égal à la longueur du tableau + 1)
  // On ajoute cet objet au tableau newShoppingList qui a été initialisé avec le contenu de shoppingList
  function add(name) {
    let newShoppingList = [...shoppingList];
    newShoppingList.push({ id: shoppingList.length + 1, name: name, checked: true });
    setShoppingList(newShoppingList)
  }

  // On retourne le composant, constitué de plusieurs composants enfants
  return (
    <div className="App">
      <Header />
      {shoppingList.map((elt, index) => (
        <Elt key={index} id={elt.id} name={elt.name} checked={elt.checked} toggle={toggle} del={del} />
      ))}
      <AddElt add={add} />
    </div>
  );
}

export default App;
