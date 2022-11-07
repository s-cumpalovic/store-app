import React, { useState } from "react";
import CustomerService from "../services/CustomerService";
import SingleCustomerComponent from "../components/SingleCustomerComponent";
import CreateCustomerForm from "../components/CreateCustomerForm";

export default function AppCustomers() {
  const [customers, setCustomers] = useState(CustomerService.getAll());
  const [newCustomer, setNewCustomer] = useState({
    firstname: "",
    lastname: "",
  });

  const handleDeleteCustomer = (id) => {
    if (CustomerService.delete(id)) {
      setCustomers([...customers.filter((customer) => customer.id !== id)]);
    }
  };

  const handleCreateNewCustomer = (e) => {
    e.preventDefault();

    const newCustomerResponse = CustomerService.create(newCustomer);

    if (newCustomerResponse) {
      setCustomers([...customers, newCustomerResponse]);
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
      <h3 className="customers-heading">Add new customer:</h3>
      <CreateCustomerForm
        newCustomer={newCustomer}
        setNewCustomer={setNewCustomer}
        onCreateNewCustomer={handleCreateNewCustomer}
      />
    </div>
  );
}
