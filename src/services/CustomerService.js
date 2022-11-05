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
  }
  getAll() {
    return this.customers;
  }

  get(id) {
    return this.customers.find((customer) => customer.id === id);
  }

  delete(id) {
    const customerIndex = this.customers.findIndex((customer) => customer.id === Number(id));
    console.log(customerIndex);
    this.customers.slice(customerIndex, 1);
    return true;
  }
}

export default new CustomerService();
