import React from "react";
import "./style.scss";

export default function NewCustomerInfo() {
  return (
    <div className="new-customer-info">
      <div className="new-customer-info-wrapper">
        <h3>New Customer?</h3>
        <p>Create an account with us and you&apos;ll be able to:</p>
        <ul>
          <li>Check out faster</li>
          <li>Save multiple shipping addresses</li>
          <li>Access your order history</li>
          <li>Track new orders</li>
          <li>Save items to your Wish List</li>
        </ul>
        <button>CREATE ACCOUNT</button>
      </div>
    </div>
  );
}
