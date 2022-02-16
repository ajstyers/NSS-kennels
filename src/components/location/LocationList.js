import React, { useState, useEffect } from 'react';
import { LocationCard } from './LocationCard.js';
import { getAllLocations, deleteLocation } from '../../modules/LocationManager.js';

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

  const handleDeleteLocation = id => {
    deleteLocation(id)
    .then(() => getAllLocations().then(setLocations));
  };

  return(
    <div className="container-cards">
      {locations.map(location =>
        <LocationCard
        key={location.id}
        location={location}
        handleDeleteLocation={handleDeleteLocation} />
      )};
    </div>
  );
};