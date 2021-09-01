import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
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
        <Button linkTo="#">SIGN IN</Button>
        <Link className="remind-password" to="#">
          Forgot your password?
        </Link>
      </form>
      <NewCustomerInfo />
    </section>
  );
}
