import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to={`/${person.id}`}>more detail</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Contact;
