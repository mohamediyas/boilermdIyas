import React, { useState } from "react";
import { data } from "./data";

function Contact() {
  let [name, setName] = useState(data);
  return (
    <div>
      <h1>CONTACT US PAGE</h1>
      {name.map((person) => {
        return (
          <div>
            <h4 key={person.id}>{person.name}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
