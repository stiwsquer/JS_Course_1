import React from "react";
import Input from "./Input";
export default function SignIn(props) {
  return (
    <section className="sign-in-page">
      <form className="sign-in-form">
        <Input
          isRequired={true}
          inputType="email"
          // labelText="Email Address:"
          inputId="email"
        >
          Email Address:
        </Input>

        <Input
          isRequired={true}
          inputType="password"
          // labelText="Password:"
          inputId="password"
        >
          Password:
        </Input>

        <button>SIGN IN</button>
        <a href="#">Forgot your password?</a>
      </form>
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
    </section>
  );
}
