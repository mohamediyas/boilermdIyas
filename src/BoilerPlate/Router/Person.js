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

  return (
    <div>
      <h3>{name}</h3>
      <Link to="/contact">Back</Link>
    </div>
  );
}

export default Person;
