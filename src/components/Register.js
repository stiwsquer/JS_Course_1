import React from "react";
import Input from "./Input";
// import Select from "react-select";
import Select from "./Select";
export default function Register({ months }) {
  const countryOptions = [
    { key: "af", value: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", text: "Aland Islands" },
    { key: "al", value: "al", text: "Albania" },
    { key: "dz", value: "dz", text: "Algeria" },
    { key: "as", value: "as", text: "American Samoa" },
    { key: "ad", value: "ad", text: "Andorra" },
    { key: "ao", value: "ao", text: "Angola" },
    { key: "ai", value: "ai", text: "Anguilla" },
    { key: "ag", value: "ag", text: "Antigua" },
    { key: "ar", value: "ar", text: "Argentina" },
    { key: "am", value: "am", text: "Armenia" },
    { key: "aw", value: "aw", text: "Aruba" },
    { key: "au", value: "au", text: "Australia" },
    { key: "at", value: "at", text: "Austria" },
    { key: "az", value: "az", text: "Azerbaijan" },
    { key: "bs", value: "bs", text: "Bahamas" },
    { key: "bh", value: "bh", text: "Bahrain" },
    { key: "bd", value: "bd", text: "Bangladesh" },
    { key: "bb", value: "bb", text: "Barbados" },
    { key: "by", value: "by", text: "Belarus" },
    { key: "be", value: "be", text: "Belgium" },
    { key: "bz", value: "bz", text: "Belize" },
    { key: "bj", value: "bj", text: "Benin" },
  ];
  return (
    <section className="register">
      <form>
        <Input
          isRequired={true}
          inputType="email"
          labelText="Email Adress"
          inputId="email"
        />
        <Input
          isRequired={true}
          inputType="password"
          labelText="Password"
          inputId="password"
        />
        <Input
          isRequired={true}
          inputType="password"
          labelText="Confirm Password"
          inputId="confirm_password"
        />

        <Select
          options={countryOptions}
          isRequired={true}
          labelText="Birth Month"
          placeholder="Please Select Your Birth Month"
          selectId="birth-month"
        />

        <Input
          isRequired={true}
          inputType="text"
          labelText="First Name"
          inputId="first-name"
        />

        <Input
          isRequired={true}
          inputType="text"
          labelText="Last Name"
          inputId="last-name"
        />

        <Input
          isRequired={true}
          inputType="text"
          labelText="Company Name"
          inputId="company-name"
        />

        <Input
          isRequired={true}
          inputType="tel"
          labelText="Phone Number"
          inputId="phone-number"
        />

        <Input
          isRequired={true}
          inputType="text"
          labelText="Adress Line 1"
          inputId="adress-line-1"
        />

        <Input
          isRequired={true}
          inputType="text"
          labelText="Adress Line 2"
          inputId="adress-line-2"
        />

        <Input
          isRequired={true}
          inputType="text"
          labelText="Suburb/City"
          inputId="city"
        />

        <Select
          options={countryOptions}
          isRequired={true}
          labelText="Country"
          selectId="country"
        />

        <Input
          isRequired={true}
          inputType="text"
          labelText="State/Province"
          inputId="state"
        />

        <Input
          isRequired={true}
          inputType="text"
          labelText="Zip/Postcode"
          inputId="zip"
        />
        <button type="submit">CREATE ACCOUNT</button>
      </form>
    </section>
  );
}
