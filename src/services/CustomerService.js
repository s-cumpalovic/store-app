import { getAllByAltText } from "@testing-library/react";
import React from "react";
class CustomerService {
  constructor() {
    this.customers = [
      {
        id: 0,
        firstname: "Djura",
        lastname: "Djuric",
      },
      {
        id: 2,
        firstname: "Pera",
        lastname: "Peric",
      },
      {
        id: 3,
        firstname: "Mika",
        lastname: "Mikic",
      },
      {
        id: 4,
        firstname: "Laza",
        lastname: "Lazic",
      },
    ];

    this.nextID = this.customers.length + 1;

  }

  getNewID() {
    this.newID = this.customers.length + 1;
    console.log(this.newID);
  }
  getAll() {
    return this.customers;
  }

  get(id) {
    return this.customers.find((customer) => customer.id === id);
  }

  delete(id) {
    const customerIndex = this.customers.find((customer) => customer.id === Number(id));
    if(customerIndex === -1) {
      return false;
    }
    this.customers.slice(customerIndex, 1);
    return true;
  }

  create(newCustomerData) {
    newCustomerData.id = this.nextID;
    this.customers = [...this.customers, newCustomerData];
    this.nextID++;
    console.log(this.nextID);

    return newCustomerData;
  }
}

export default new CustomerService();
