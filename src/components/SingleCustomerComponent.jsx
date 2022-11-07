import React from "react";

export default function SingleCustomerComponent({id, firstname, lastname, onDeleteSingleCustomer}) {
  return (
    <div className="customer">
      <ul className='customer-list'>
        <li>{firstname}</li>
        <li>{lastname}</li>
      </ul>
        <button onClick={() => onDeleteSingleCustomer(id)}className="btn btn-warning">Delete</button>
    </div>
  );
}