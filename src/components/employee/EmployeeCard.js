import React from "react"
import "./Employee.css"

/*
export const EmployeeCard = () => (
    <section className="employee">
        <h3 className="employee__name">Hannah Hall</h3>
        <div className="employee__location">Nashville Kennels North</div>
    </section>
)
*/

export const EmployeeCard = ({ employee }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={'/images/person-icon.png'} alt="Employee photo" />
          </picture>
          <h3>Name: <span className="card-employeeName">
            {employee.name}
          </span></h3>
          <p>Location: {employee.locationId}</p>
        </div>
      </div>
    );
}