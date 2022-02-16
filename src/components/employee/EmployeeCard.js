import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
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
          <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Discharge</button>
        </div>
      </div>
    );
}