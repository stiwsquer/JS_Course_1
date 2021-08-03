import React from "react";
import Input from "./Input";

export default function NewsletterForm(props) {
  return (
    <form className="newsletter-form">
      <h4>Subscribe to our newsletter</h4>
      <p>Get the latest updates on new products and upcoming sales</p>
      <div>
        <Input
          isRequired={true}
          inputType="email"
          placeholder="Your email adress"
          inputId="email"
        />

        <button>SUBSCRIBE</button>
      </div>
    </form>
  );
}