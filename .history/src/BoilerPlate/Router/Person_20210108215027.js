import React from "react";
import { data } from "./Component/data";
import { Link, useParams } from "react-router-dom";

function Person() {
  let { id } = useParams();
  let [name, setName] = useState(data);
  name.find((person) => person.id === id);
  return <div>{name}</div>;
}

export default Person;
