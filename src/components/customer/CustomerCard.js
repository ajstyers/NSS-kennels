import React from "react"
import "./Customer.css"


export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/person-icon.png'} alt="Customer" />
          </picture>
          <h3>Name: <span className="card-customerName">
            {customer.name}
          </span></h3>
          <p>Address: {customer.address}</p>
          <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Discharge</button>
        </div>
      </div>
    );
}