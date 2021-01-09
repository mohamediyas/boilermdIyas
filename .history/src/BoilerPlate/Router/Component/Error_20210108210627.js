import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>ERROR PAGE</h1>
      <button>
        <Link to="/">GO BACK</Link>
      </button>
    </div>
  );
}

export default Error;
