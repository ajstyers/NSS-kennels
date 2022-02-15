import React, { useState, useEffect } from 'react';
import { CustomerCard } from './CustomerCard.js';
import { getAllCustomers, getCustomerById } from '../../modules/CustomerManager.js';

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    return getAllCustomers().then(customersFromAPI => {
      setCustomers(customersFromAPI)
    });
  };

  useEffect(() => {
    getCustomers();
  }, []); //          square brackets means it will only be called once,
  //                  when component is first loaded

  return(
    <div className="container-cards">
      {customers.map(customer =>
        <CustomerCard key={customer.id} customer={customer} />
      )};
    </div>
  );
};