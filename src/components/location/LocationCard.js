import React from "react"
import "./Location.css"
import { Link } from "react-router-dom";

export const LocationCard = ({ location, handleDeleteLocation }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/location-icon.jpg'} alt="Location photo" />
          </picture>
          <h3>Name: <span className="card-locationName">
            {location.name}
          </span></h3>
          <p>Address: {location.address}</p>
          <button type="button" onClick={() => handleDeleteLocation(location.id)}>Close Location</button>
          <Link to={`/locations/${location.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
}