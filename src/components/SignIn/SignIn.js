import React from "react";
import Input from "../Input/Input";
import NewCustomerInfo from "../NewCustomerInfo/NewCustomerInfo";
import "./style.scss";
export default function SignIn() {
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
      <NewCustomerInfo />
    </section>
  );
}
