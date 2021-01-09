import React from "react";
import { data } from "./Component/data";
import { Link, useParams } from "react-router-dom";

function Person() {
  console.log("USE", useParams());
  return <div></div>;
}

export default Person;
