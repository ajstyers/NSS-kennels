import React, { useState, useEffect } from 'react';
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, getAnimalById, deleteAnimal } from '../../modules/AnimalManager.js';

// CHAPTER 10:

export const AnimalList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);
  /* 1) the empty array passed to useState is the initial value of the state: []
     2) useState then returns an array. the first element in the array is the
     current value of the state: animals
     3) The second element in the array is a function that
     gives us access to change the state: setAnimals
          - We can call setAnimals when we need to change the value of the animals stored in state.
          - setAnimals(someNewAnimalsArray);
  */

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  const handleDeleteAnimal = id => {
    deleteAnimal(id)
    .then(() => getAllAnimals().then(setAnimals));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []); //          square brackets means it will only be called once,
  //                  when component is first loaded


  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          handleDeleteAnimal={handleDeleteAnimal}
        />)
      }
    </div>
  );

};

// CHAPTER 9: current status
// stopped at adding pic of dog
// go back to chap 8 and finish practice requirements of grabbing data (fetch calls) from API

/*
  What is the key?
Each child in a list should have a unique "key" prop.
This is how React keeps track of re-rendering only the things that have changed.

  What is happening?
Using the array method map, for each item/animal in the array animals,
return an <AnimalCard /> with a reference to the single item/animal.
This reference is now a property on the <AnimalCard /> and is referred to as props.
*/

/*
Because <AnimalCard /> is included in the render method of <AnimalList />,
it is a child component of the <AnimalList /> component.
*/


/*
Chap 8: Rendering and Re-Rendering

What do we mean when we say a component "renders"?
Rendering happens when a component returns HTML and then React puts
that HTML onto the DOM.

A component re-renders any time it's state changes.
Re-rendering essentially means React calls the component function again,
takes whatever HTML it returns, and places it on the DOM.
*/