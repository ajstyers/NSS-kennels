import React, { useEffect } from 'react';

/*Keeping the Single Responsibility Principle in mind,
you are going to create a JavaScript module that contains the animal API calls.
This provides flexibility for your application.

Other components, in the future, may need the ability to make their own API calls.
You're going to eliminate the possibility of duplicate code by making a module
whose sole responsibility is to interact with the API.
*/


const remoteURL = "http://localhost:8088"

export const getAnimalById = (animalId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/animals/${animalId}?_expand=location&_expand=customer`)
  .then(res => res.json())
}

export const getAllAnimals = () => {
  return fetch(`${remoteURL}/animals`)
  .then(res => res.json())
}

/*
Our AnimalCard does a great job of rendering a single animal,
but our database has more than one animal. That's where the AnimalList component will come in.
By the time we're done, it will initiate the AnimalManager getAllAnimals() call,
hold on to the returned data, and then render the <AnimalCard /> component for each animal.
*/

// Fetching data from a component:

/*
useEffect is a function provided by React that gives us
a place from which to access external data and resources (such as an API) from our component.
Ultimately we useEffect anytime we need to reach out to the world or make
changes that cannot be done in the return.
*/