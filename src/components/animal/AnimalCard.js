import React from "react"
import "./Animal.css"

/*
export const AnimalCard = () => (
    <section className="animal">
        <h3 className="animal__name">Doodles</h3>
        <div className="animal__breed">Breed: Poodle</div>
    </section>
)
*/

export const AnimalCard = ({ animal }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/dog.svg'} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">
            {animal.name}
          </span></h3>
          <p>Breed: {animal.breed}</p>
        </div>
      </div>
    );
}