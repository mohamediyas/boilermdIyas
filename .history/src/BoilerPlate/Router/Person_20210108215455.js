import React, { useState } from "react";
import { data } from "./Component/data";
import { Link, useParams } from "react-router-dom";

function Person() {
  const { id } = useParams();
  let [name, setName] = useState("defaultname");
  let names = name.find((person) => person.id === id);

  // setName(names.name);

  return <div>{name}</div>;
}

export default Person;
