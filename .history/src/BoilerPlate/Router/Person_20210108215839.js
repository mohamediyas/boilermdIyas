import React, { useEffect, useState } from "react";
import { data } from "./Component/data";
import { Link, useParams } from "react-router-dom";

function Person() {
  const { id } = useParams();
  let [name, setName] = useState("defaultname");
  useEffect(() => {
    let paramName = data.find((name) => {
      return name.id === parseInt(id);
    });
    setName(paramName.name);
  }, []);

  return <div>{name}</div>;
}

export default Person;
