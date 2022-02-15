import React from "react"
import "./Location.css"

/*
export const LocationCard = () => (
    <section className="location">
        <h3 className="location__name">Nashville Kennels North</h3>
        <div className="location__address">200 Main Street</div>
    </section>
)
*/

export const LocationCard = ({ location }) => {
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
        </div>
      </div>
    );
}