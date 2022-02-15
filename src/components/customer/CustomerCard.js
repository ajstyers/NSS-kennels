import React from "react"
import "./Customer.css"

/*
export const CustomerCard = () => (
    <section className="customer">
        <h3 className="customer__name">Hannah Hall</h3>
        <div className="customer__address">Address: 100 Infinity Way</div>
    </section>
)
*/

export const CustomerCard = ({ customer }) => {
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
        </div>
      </div>
    );
}