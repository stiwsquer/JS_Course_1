import React, { useContext } from "react";

import { AppContext } from "../context/app-context";

export default function NameInput() {
  // const [input, setInput] = useState("");
  const [name, setName] = useContext(AppContext);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="name-input">
      <input
        type="text"
        placeholder="Enter Your Name"
        {...name}
        onChange={handleChange}
      />
    </section>
  );
}
