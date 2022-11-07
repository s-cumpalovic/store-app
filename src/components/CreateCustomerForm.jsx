import React from "react";

export default function CreateCustomerForm({
  newCustomer,
  setNewCustomer,
  onCreateNewCustomer
}) {
  return (
    <div className="form-group">
      <form onSubmit={onCreateNewCustomer}>
        <input
          required
          placeholder="Your firstname.."
          type="text"
          value={newCustomer.firstname}
          onChange={({ target }) =>
            setNewCustomer({
              ...newCustomer,
              firstname: target.value,
            })
          }
        />
        <input
          required
          placeholder="Your lastname.."
          type="text"
          value={newCustomer.lastname}
          onChange={({ target }) =>
            setNewCustomer({
              ...newCustomer,
              lastname: target.value,
            })
          }
        />
        <button type="submit"className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}
