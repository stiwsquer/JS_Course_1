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
        <Input isRequired={true} inputType="email" inputId="email">
          Email Adress
        </Input>

        <Input isRequired={true} inputType="password" inputId="password">
          Password
        </Input>
        <Input
          isRequired={true}
          inputType="password"
          inputId="confirm_password"
        >
          Confirm Password
        </Input>
        <Select
          options={countryOptions}
          isRequired={true}
          placeholder="Please Select Your Birth Month"
          selectId="birth-month"
        >
          Birth Month
        </Select>

        <Input isRequired={true} inputType="text" inputId="first-name">
          First Name
        </Input>
        <Input isRequired={true} inputType="text" inputId="last-name">
          Last Name
        </Input>
        <Input isRequired={true} inputType="text" inputId="company-name">
          Company Name
        </Input>
        <Input isRequired={true} inputType="tel" inputId="phone-number">
          Phone Number
        </Input>
        <Input isRequired={true} inputType="text" inputId="adress-line-1">
          Adress Line 1
        </Input>
        <Input isRequired={true} inputType="text" inputId="adress-line-2">
          Adress Line 2
        </Input>
        <Input isRequired={true} inputType="text" inputId="city">
          Suburb/City
        </Input>
        <Select options={countryOptions} isRequired={true} selectId="country">
          Country
        </Select>

        <Input isRequired={true} inputType="text" inputId="state">
          State/Province
        </Input>
        <Input isRequired={true} inputType="text" inputId="zip">
          Zip/Postcode
        </Input>
        <button type="submit">CREATE ACCOUNT</button>
      </form>
    </section>
  );
}
