import React from "react";
import axios from "axios";

const ContextMain = () => {
  const [inform, setInform] = useState([]);

  const fetchdata = async () => {
    const data = await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  };

  return <div></div>;
};

export default ContextMain;
