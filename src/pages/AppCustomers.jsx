import React, { useState } from "react";
import CustomerService from "../services/CustomerService";
import SingleCustomerComponent from "../components/SingleCustomerComponent";

export default function AppCustomers() {
  const [customers, setCustomers] = useState(CustomerService.getAll());

  const handleDeleteCustomer = (id) => {
    if (CustomerService.delete(id)) {
      setCustomers([...customers.filter((customer) => customer.id !== id)]);
    }
  };
  return (
    <div className="customers-container">
      <h3 className="customers-heading">Customers:</h3>
      <>
        {customers.map((customer) => (
          <SingleCustomerComponent
            key={customer.id}
            id={customer.id}
            firstname={customer.firstname}
            lastname={customer.lastname}
            onDeleteSingleCustomer={handleDeleteCustomer}
          />
        ))}
      </>
    </div>
  );
}
