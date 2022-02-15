import React, { useState, useEffect } from 'react';
import { LocationCard } from './LocationCard.js';
import { getAllLocations, getLocationById } from '../../modules/LocationManager.js';

export const LocationList = () => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return getAllLocations().then(dataFromAPI => {
      setLocations(dataFromAPI)
    });
  };

  useEffect(() => {
    getLocations();
  }, []); //          square brackets means it will only be called once,
  //                  when component is first loaded

  return(
    <div className="container-cards">
      {locations.map(location =>
        <LocationCard key={location.id} location={location} />
      )};
    </div>
  );
};