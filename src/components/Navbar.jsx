import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <h2 className="nav-title">.store-app()</h2>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/customers">Customers</Link>
        </li>
      </ul>
    </div>
  );
}
