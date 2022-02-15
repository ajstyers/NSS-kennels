import React, { useState, useEffect } from 'react';
import { EmployeeCard } from './EmployeeCard.js';
import { getAllEmployees, getEmployeeById } from '../../modules/EmployeeManager.js';

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return getAllEmployees().then(dataFromAPI => {
      setEmployees(dataFromAPI)
    });
  };

  useEffect(() => {
    getEmployees();
  }, []); //          square brackets means it will only be called once,
  //                  when component is first loaded

  return(
    <div className="container-cards">
      {employees.map(employee =>
        <EmployeeCard key={employee.id} employee={employee} />
      )};
    </div>
  );
};